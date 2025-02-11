using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Vikreta.Data;
using Vikreta.Repositories;
using Vikreta.Services;
using YourNamespace.Repositories;
using YourNamespace.Services;
using Vikreta.CloudinaryUpload;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();

builder.Services.AddMemoryCache();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });

});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Vikreta API",
        Description = "A simple example ASP.NET Core API"
    });
});


builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(8, 0, 2)) 
    )
);

builder.Services.AddScoped<IBidService, BidService>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IBidRepository, BidRepository>();
builder.Services.AddScoped<IJwtUtils, JwtUtils>();
builder.Services.AddScoped<IOtpService, OtpServices>();
builder.Services.AddScoped<ICloudinayService, CloudinaryService>();

var app = builder.Build();
app.UseCors("AllowAll");


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Vikreta API v1");
        c.RoutePrefix = string.Empty;  
    });
}

app.UseAuthorization();

app.MapControllers();

app.Run();
