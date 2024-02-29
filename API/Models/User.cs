using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string HashedPassword { get; set; }
    public string? PictureUrl {get;set;}

}

public class Question
{
    [Key]
    public int Id { get; set; }
    [Required] public User User { get; set; }
    public string Body { get; set; }

    public bool IsSolved { get; set; }

    public DateTime PublishDateTime {get;set;}

    public ICollection<Answer> Answers  { get; set; }

} 

public class Answer
{
    [Key]
    public int Id { get; set; }
    public User? User { get; set; }
    public string Body { get; set; }
    public bool IsGeneratedByAI { get; set; }

    public int Score { get; set; }

    public DateTime PublishDateTime {get;set;}

}

public class AIChat
{
    [Key]
    public int Id { get; set; }

    public User User { get; set; }

    public string Title { get; set; }

}

public class AIChatQuestion
{
    [Key] 
    public int Id { get; set; }
    public AIChat AIChat { get; set; }
    public AIChatAnswer? Answer { get; set; }
    public int AnserId { get; set; }
    public string Body { get; set; }
}

public class AIChatAnswer
{
    public int Id { get; set; }
    public AIChatQuestion Question { get; set; }
    public int QuestionId { get; set; }
    public string Body { get; set; }
}