using Microsoft.EntityFrameworkCore;

class AppDbContext(IConfiguration configuration) : DbContext
{
    public readonly IConfiguration configuration = configuration;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
    }
}