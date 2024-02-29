using System.Data.Common;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.HttpResults;
using InstantAPIs;
using Azure.AI.OpenAI;
using ChatGPT.Net;
using Microsoft.AspNetCore.Mvc;
using OpenAI_API;
using Microsoft.CodeAnalysis.CodeFixes;
using Microsoft.EntityFrameworkCore;

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

builder.Services.AddInstantAPIs();

builder.Services.AddControllersWithViews()
    .AddNewtonsoftJson(options =>
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
);

var app = builder.Build();


if (app.Environment.IsProduction() || app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// app.MapInstantAPIs<AppDbContext>();



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



// var gpt = new ChatGpt("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");

// app.MapPost("/chatgpt",async ([FromBody] Ask ask)=>
// {

//     string? response = null;
//     try
//     {
//         response = await gpt.Ask($"{ask.question}",);

//     }
//     catch(Exception ex)
//     {
//         System.Console.WriteLine(" --> Error : " + ex.Message);
//     }

//     if(response is null)
//     {
//         return Results.BadRequest("Can not ask the question :\n\n\n\n" + ask.question);
//     }

//     return Results.Ok( response );
// });

string apiKey = "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";



// // static async Task<string> GetCompletion(string apiKey, string prompt)
//     {
//         using (HttpClient client = new HttpClient())
//         {
//             client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            
//             // var content = new StringContent($"{{\"prompt\": \"{prompt}\"}}");

//             string headerString = @"
//             {
//                 ""model"": ""gpt-3.5-turbo"",
//                 ""messages"": [{""role"": ""user"", ""content"": ""Say this is a test!""}],
//                 ""temperature"": 0.7
//             }
//             ";

            
//             var content = new StringContent(headerString);
//             var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);

//             if (response.IsSuccessStatusCode)
//             {
//                 return await response.Content.ReadAsStringAsync();
//             }
//             else
//             {
                
//                 return "Error occurred while getting completion." + response.StatusCode.ToString();
//             }
//         }
//     }


//  static async Task<string?> SendMessage(string apiUrl, string messageData)
//     {
//         HttpResponseMessage? response = null;
//         using (HttpClient client = new HttpClient())
//         {
//             try
//             {
//                 // Create a StringContent object containing the message data
//                 var content = new StringContent(messageData);

//                 // Send a POST request to the API endpoint
//                  response = await client.PostAsync(apiUrl, content);

//                 // Check if the request was successful
//                 if (response.IsSuccessStatusCode)
//                 {
//                     Console.WriteLine("Message sent successfully.");
//                 }
//                 else
//                 {
//                     Console.WriteLine("Failed to send message. Status code: " + response.StatusCode);
//                 }
//             }
//             catch (Exception ex)
//             {
//                 Console.WriteLine("An error occurred: " + ex.Message);
//             }

//             return response.Content.ToString();
//         }
//     }







app.MapGet("/users",async (AppDbContext db)=>{
    return await db.Users.ToListAsync();
});

app.MapGet("/users/{id}",async (AppDbContext db,int id)=>{
    return await db.Users.Where(u=>u.Id == id).ToListAsync();
});

app.MapPost("/users/login",async (AppDbContext db,[FromBody]LoginDto login)=>{

    User? user = await db.Users.FirstOrDefaultAsync(u=>u.Email == login.Email);

    if(user is null) return Results.NotFound();

    if(user.HashedPassword != login.Password)
    {
        return Results.BadRequest("Password is wrong");
    }

    return Results.Ok(user);
});

app.MapPost("/users/register",async (AppDbContext db,[FromBody] RegisterDto register)=>{

    var user = new User(){
        Email = register.Email,
        Name = register.Name,
        PictureUrl = register.ImageUrl,
        HashedPassword = register.Password // Must be hashed
    };
    db.Users.Add(user);
    await db.SaveChangesAsync();

    return Results.Ok( user);
});
// 19:53
app.MapGet("/questions",(AppDbContext db)=>{
    return db.Questions.Include(u=>u.User).Include(q=>q.Answers).ToListAsync();
});

app.MapGet("/questions/{id}/answers",(AppDbContext db,int id)=>{
    return db.Questions.FirstOrDefault(q=>q.Id == id).Answers.ToList();
});

app.MapPost("/questions",async (AppDbContext db,[FromBody]QuestionCreateDto questionCreate)=>
{

    var user = await db.Users.FirstOrDefaultAsync(u=>u.Id == questionCreate.UserId);

    if(user is null) return Results.BadRequest("User not found");
     
    Question question = new Question
    {
        Body = questionCreate.Text,
        IsSolved = false,
        PublishDateTime = DateTime.UtcNow,
        User = user
    };

    db.Questions.Add(question);
    await db.SaveChangesAsync();

    return Results.Ok(question);
});



app.MapPost("/questions/{id}/answers",async (AppDbContext db,[FromBody]AnswerCreateDto answerDto)=>{
    
    Question? q = await db.Questions.FirstOrDefaultAsync(q=>q.Id ==  answerDto.QuestionId);
    var u = await db.Users.FirstOrDefaultAsync(u=>u.Id ==  answerDto.UserId);

    var a = new Answer{
        Body = answerDto.Text,
        PublishDateTime = DateTime.UtcNow,
        IsGeneratedByAI = false,
        Score = 0,
        User = u,
    };

    q.Answers.Add(a);
    db.Answers.Add(a);
    
    await db.SaveChangesAsync();

    return Results.Ok(a);
});

app.MapGet("/database-fill",async (AppDbContext db)=>
{
    await Configurator.PopulateDatabase(db);
});

app.Run();


class QuestionCreateDto
{
    public int UserId { get; set; }
    public string Text {get;set;}
}

class AnswerCreateDto
{
        public int UserId { get; set; }

    public int QuestionId { get; set; }
    public string Text {get;set;}
}

record Ask(string question);
class LoginDto
{
    public string Email { get; set; }
    public string Password { get; set; }
}


class RegisterDto
{
    public string Email { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }
    public string ImageUrl { get; set; }
}

class Configurator{

    private static async Task PopulateUsers(AppDbContext db)
    {
                string unknownPicUrl = "https://ibb.co/WnZDJJZ";

        db.Users.Add(
        
            new User{
                Email = "houdaifa.bouamine@gmail.com",
                HashedPassword = "1234",
                Name = "Houdaifa Bouamine",
                PictureUrl = "https://ibb.co/0qXHTq3"
            }
        
        );

        db.Users.Add(
        
            new User{
                Email = "amine.mazari@gmail.com",
                HashedPassword = "1234",
                Name = "Amine Mazari",
                PictureUrl = unknownPicUrl,
            }
        
        );

        db.Users.Add(
        
            new User{
                Email = "akram.kaid@gmail.com",
                HashedPassword = "1234",
                Name = "Akram Kaid",
                PictureUrl = "https://ibb.co/tB2g5fF",
            }
        
        );

        db.Users.Add(
            
            new User{
                Email = "ishaq.bm@gmail.com",
                HashedPassword = "1234",
                Name = "Akram Kaid",
                PictureUrl = unknownPicUrl
            }
        );

        db.Users.Add(
            
            new User{
                Email = "djamel@gmail.com",
                HashedPassword = "1234",
                Name = "Djamel",
                PictureUrl = "https://ibb.co/f4wKcW4"
            }
        );

        await db.SaveChangesAsync();
    }
    
    private static async Task PopulateQuestions(AppDbContext db)
    {
        
      

        #region Q1

        var q = new Question{
                User = db.Users.FirstOrDefault(u=>u.Name == "Houdaifa Bouamine"),
                Body = @"Hello, I am facing a problem with internet interaption,
every time I touch the router, the phone,
or the cables, the ADSL turn off for about 5 minutes, 
How can I solve that ???",
                IsSolved = true,
                PublishDateTime = new DateTime(2022,5,23,4,2,32).ToUniversalTime(),
            };

        

        db.Questions.Add(q);

        q.Answers = new List<Answer>();

        db.SaveChanges();

        var a = new Answer
        {
            User = db.Users.First(u => u.Name == "Amine Mazari"),
            IsGeneratedByAI = false,
            PublishDateTime = new DateTime(2022, 5, 23, 5, 43, 32).ToUniversalTime(),
            Score = 1,
            Body = @"May be the reason is cut on the cabels, try to find it.",
        };
System.Console.WriteLine("--> question id" + q.Id);
        db.Answers.Add(a);
        q.Answers.Add(a);

        a = new Answer
        {
            User = db.Users.First(u => u.Name == "Amine Mazari"),
            IsGeneratedByAI = false,
            PublishDateTime = new DateTime(2022, 5, 23, 5, 43, 32).ToUniversalTime(),
            Score = 7,
            Body = @"Verify that the wire box is assembling the wire correctly, consider buying new one if it is broken.",
        };

        db.Answers.Add(a);
        q.Answers.Add(a);

          a = new Answer
        {
            User = q.User,
            IsGeneratedByAI = false,
            PublishDateTime = new DateTime(2022, 5, 23, 5, 43, 32).ToUniversalTime(),
            Score = 3,
            Body = @"Thanks for help !!! , The problem was a wire nearly splited up from the connecter on the wire box, solved by connect it tightly",
        };

        db.Answers.Add(a);
                q.Answers.Add(a);


        #endregion

        #region Q2
        q = new Question{
                User = db.Users.FirstOrDefault(u=>u.Name == "Amine Mazari"),
                Body = @"every day my internet become very slow from about 13:00 to 16:00, why ? and how can I solve this ?",
                IsSolved = false,
                PublishDateTime = new DateTime(2022,5,23,4,2,32).ToUniversalTime(),
            };
        db.Questions.Add(

            q

        );

        q.Answers = new List<Answer>();


        a = new Answer
        {
            User = db.Users.First(u => u.Name == "Houdaifa Bouamine"),
            IsGeneratedByAI = false,
            PublishDateTime = new DateTime(2022, 5, 23, 5, 43, 32).ToUniversalTime(),
            Score = 3,
            Body = @"Probebly it is because of the heavy loading by the neibords,
try to contact theme to upgrade the unfastructure in your area.",
        };
                q.Answers.Add(a);

        #endregion

        await db.SaveChangesAsync();
    }
    public static async Task PopulateDatabase(AppDbContext db)
    {
        
        db.Answers.ExecuteDelete();
        db.Questions.ExecuteDelete();
        db.Users.ExecuteDelete();

        await db.SaveChangesAsync();

        await PopulateUsers(db);
        await PopulateQuestions(db);
        
        await db.SaveChangesAsync();
    }
}