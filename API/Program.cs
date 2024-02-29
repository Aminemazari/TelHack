using System.Data.Common;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.HttpResults;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<AppDbContext>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin();
            policy.AllowAnyMethod();
            policy.AllowAnyHeader();
        });
});

var app = builder.Build();


if (app.Environment.IsProduction() || app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");

app.MapGet("/",()=>{
    return Results.Redirect("/swagger/index.html");
});

app.MapGet("/database-create",(AppDbContext db)=>{
    db.Database.EnsureCreated();
    return Results.Ok();
});

app.MapGet("database-delete",(AppDbContext db)=>{
    db.Database.EnsureDeleted();
    return Results.Ok();
});

app.Run();
