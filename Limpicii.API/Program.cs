using Limpicii.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;

namespace Limpicii.API
{
    public class Program
    {
        public static void Main(string[] args)
        {

            #region Configurating Services - Start
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();
            // Add database context
            builder.Configuration.AddEnvironmentVariables();

            builder.Services.AddDbContext<LimpiciiDbContext>(options =>
            {
                options.UseSqlServer(
                    builder.Configuration.GetConnectionString("DefaultConnection"),
                    providerOptions => providerOptions.EnableRetryOnFailure() 
                    );
            });

            #endregion Configurating Services - End

            #region Configurating Middleware - Start
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            //if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
                app.UseSwaggerUi(options =>
                {
                    options.DocumentPath = "openapi/v1.json";
                });
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

        

            app.Run();
            #endregion Configurating Middleware - End
        }
    }
}
