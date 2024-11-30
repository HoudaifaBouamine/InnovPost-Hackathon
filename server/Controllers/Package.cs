using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/packages")]
public class PackagesController(AppDbContext db) : ControllerBase
{
    [HttpGet, Authorize]
    public async Task<IActionResult> GetUserPackages()
    {
        var email = User?.Identity?.Name;
        var user = await db.Users.FirstOrDefaultAsync(u => u.Email == email);

        if(user is null) return Forbid();

        var userPackages = await db.Packages
            .Include(p => p.Sender)
            .Include(p=>p.Receiver)
            .Where(p => p.Sender.Id == user.Id || p.Receiver.Id == user.Id)
            .ToListAsync();

        return Ok(userPackages);
    }

    [HttpGet("wow")]

    public async Task<IActionResult> GetAllPackages()
    {
        return Ok(await db.Packages
            .Include(p => p.Sender)
            .Include(p=>p.Receiver)
            .ToListAsync());
    }

    // [HttpPost, Authorize]
    // public async Task<IActionResult> AddReceiver(AddPackageReceiverDTO dto)
    // {
    //     var email = User?.Identity?.Name;
    //     var user = await db.Users.Where(u => u.Email == email).FirstOrDefaultAsync();

    //     if(user is null) return Forbid();

    //     var package = await db.Packages.Include(p => p.Sender).FirstOrDefaultAsync(p => p.Id == dto.PackageId);

    //     if(package is null) return NotFound();

    //     if(package.Sender.Id != user.Id) return Forbid();

    //     var receiver = await db.Users.FirstOrDefaultAsync(u => u.Id == dto.ReceiverId.ToString());
    //     if(receiver is null) return NotFound();

    //     package.Receiver = receiver;

    //     await db.SaveChangesAsync();

    //     return Ok(package);
    // }

    [HttpPost, Authorize]
    public async Task<IActionResult> SendPackage(SendPackageDTO dto)
    {
        var sender = await db.Users.FirstOrDefaultAsync(u => u.Id == dto.SenderId.ToString());
        var receiver = await db.Users.FirstOrDefaultAsync(u => u.Id == dto.ReceiverId.ToString());

        if(sender is null) return NotFound();
        if(receiver is null) return NotFound();

        List<Node> path = GenerateFakePath(dto.sendAddress, dto.receiveAddress);

        var package = new Package (sender, receiver, path);
        await db.Packages.AddAsync(package);
        await db.SaveChangesAsync();
        return Ok(new PackageDTO(
            Id : package.Id,
            Sender : new UserDTO{
                Id = sender.Id,
                Address = sender.Address,
                Email = sender.Email,
                FullName = sender.FullName,
                Nin = sender.Nin,
                Phone = sender.PhoneNumber
            },
            Receiver : new UserDTO{
                Id = receiver.Id,
                Address = receiver.Address,
                Email = receiver.Email,
                FullName = receiver.FullName,
                Nin = receiver.Nin,
                Phone = receiver.PhoneNumber
            },
            Path : package.Path,
            CurrentNode : package.CurrentNode,
            ReceiveNode : package.ReceiveNode,
            SendNode  : package.SendNode,
            Status : package.Status
        ));
    }

    List<Node> GenerateFakePath(string sendAddress, string receiveAddress)
    {
        List<Node> path = [new Node{ Address = sendAddress, ReceiveTime = DateTime.Now }];

        for(int i = 0; i < ((new Random().Next() % 5) + 1) ; i++)
            path.Add(new Node{Address = "Address " + i});  

        path.Add(new Node{Address = receiveAddress, ReceiveTime = DateTime.Now}); 

        return path;
    }
}

public record AddPackageReceiverDTO(Guid PackageId, Guid ReceiverId);
public record SendPackageDTO(Guid SenderId, Guid ReceiverId, string sendAddress, string receiveAddress);
