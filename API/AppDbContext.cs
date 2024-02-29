using Microsoft.EntityFrameworkCore;

class AppDbContext(IConfiguration configuration) : DbContext
{
    public readonly IConfiguration configuration = configuration;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("DefaultConnection"));
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Question> Questions { get; set; }
    public DbSet<Answer> Answers { get; set; }


    public DbSet<AIChat> AIChats { get; set; }
    public DbSet<AIChatQuestion> AIChatQuestions { get; set; }
    public DbSet<AIChatAnswer> AIChatAnswers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
        modelBuilder.Entity<AIChatQuestion>()
            .HasOne(q=>q.Answer)
            .WithOne(a=>a.Question)
            .HasForeignKey<AIChatAnswer>(a=>a.QuestionId);
        
    }
}