using Newtonsoft.Json.Serialization;

var MyAllowAnyOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);


// Enable CORS support 
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowAnyOrigins,
        policy =>
        {
            // For security we should not allow "AnyOrigin". Allowing for this app as it
            // will be run locally for now
            policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

//JSON Serializer
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options =>
options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
    .AddNewtonsoftJson(options => 
    options.SerializerSettings.ContractResolver = new DefaultContractResolver());

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowAnyOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();
