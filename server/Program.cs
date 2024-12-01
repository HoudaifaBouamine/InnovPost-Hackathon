using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(
    options => options.UseSqlite("Data Source=app.db"));

builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<AppUser>(options =>
{
    options.Password.RequireDigit = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 4;
    options.Password.RequireLowercase = false;
    options.Password.RequiredUniqueChars = 0;
})
    .AddEntityFrameworkStores<AppDbContext>();

builder.Services.AddControllers();
builder.Services.AddCors(a=>a.AddPolicy("AllowAll", policy=>policy.WithOrigins("http://localhost:3001")
      .AllowCredentials()));
      
var app = builder.Build();

app.UseCors("AllowAll");

app.UseSwagger();
app.UseSwaggerUI();

var apiGroup = app.MapGroup("/api");

var authGroup = apiGroup.MapGroup("/auth");

authGroup.MapCustomeIdentityApi<AppUser>().WithTags("Auth");

apiGroup.MapGet("/no-auth", () => Results.Ok("no-auth response"))
    .WithTags("Test");
    
apiGroup.MapGet("/auth", () => Results.Ok("auth response"))
    .WithTags("Test")
    .RequireAuthorization();

app.MapGet("/", () => Results.Redirect("/swagger/index.html"))
    .ExcludeFromDescription();

apiGroup.MapGet("/users",(AppDbContext db) => db.Users.Select(u=>new UserDTO
{
    Id = u.Id!,
    Address = u.Address!,
    Email = u.Email!,
    FullName = u.FullName!,
    Nin = u.Nin!,
    Phone = u.PhoneNumber!
}).ToList());

app.MapControllers();

app.Run("http://localhost:5000");



    