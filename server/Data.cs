using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using Microsoft.EntityFrameworkCore;

public class AppDbContext : IdentityDbContext<AppUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options) :
        base(options)
    { 
        Database.EnsureCreated();
    }

    public DbSet<Package> Packages { get; set; }
    public DbSet<Node> Nodes { get; set; }

}

public class AppUser : IdentityUser
{
    public string? FullName { get; set; }
    public string? Nin { get; set; }
    public string? Address { get; set; }
}

public class Package
{
    public Guid Id { get; set; }
    public AppUser Sender { get; set; }
    public AppUser Receiver { get; set; }
    public Node SendNode => Path.First();
    public Node ReceiveNode => Path.Last();
    public Node CurrentNode { get; private set; } 
    public PackageStatus Status { get; set; } = PackageStatus.OnQueue;
    public List<Node> Path { get; set; }

    public Package(AppUser sender,AppUser receiver,List<Node> path)
    {
        Sender = sender;
        Receiver = receiver;
        Path = path;
        CurrentNode = path.First();
        CurrentNode.ReceiveTime = DateTime.Now;
    }

    protected Package() { }

    public void OutNode()
    {
        CurrentNode.SendTime = DateTime.Now;

        var nextIndex = Path.IndexOf(CurrentNode) + 1;
        if(nextIndex >= Path.Count) 
        {
            Status = PackageStatus.Delivered;
            return;
        }
        CurrentNode = Path[nextIndex];
    }
     
    public void InNode()
    {
        CurrentNode.ReceiveTime = DateTime.Now;
    }
}

public record PackageDTO (Guid Id, UserDTO Sender, UserDTO Receiver, Node SendNode, Node ReceiveNode, Node CurrentNode, PackageStatus Status, List<Node> Path);
    
public enum PackageStatus { OnQueue = 1,OnDelivery, Delivered, Failed }

public class Node
{
    public Guid Id { get; set; }
    public string Address { get; set; }
    public DateTime? ReceiveTime { get; set; }
    public DateTime? SendTime { get; set; }
}