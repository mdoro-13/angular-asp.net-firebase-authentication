using FirebaseAdmin;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Server.Authentication;

var builder = WebApplication.CreateBuilder(args);
var config = builder.Configuration;

const string AUTHENTICATION_SCHEME = JwtBearerDefaults.AuthenticationScheme;


// Add services to the container.
builder.Services.AddSingleton(FirebaseApp.Create());

builder.Services
    .AddAuthentication(AUTHENTICATION_SCHEME)
    .AddScheme<AuthenticationSchemeOptions, FirebaseAuthenticationHandler>(AUTHENTICATION_SCHEME, o => { });

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

app.UseRouting();

app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins(config["ClientUrl"]));

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
