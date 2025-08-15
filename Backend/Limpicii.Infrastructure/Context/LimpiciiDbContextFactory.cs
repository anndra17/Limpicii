using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;


namespace Limpicii.Infrastructure.Context
{
    public class LimpiciiDbContextFactory : IDesignTimeDbContextFactory<LimpiciiDbContext>
    {
        public LimpiciiDbContext CreateDbContext(string[] args)
        {
            var apiProjectPath = Path.Combine(Directory.GetCurrentDirectory(), "..", "Limpicii.API");

            var builder = new ConfigurationBuilder()
                           .SetBasePath(apiProjectPath) 
                           .AddJsonFile("appsettings.Development.json", optional: false)
                           .Build();

            // Citește connection string-ul
            var connectionString = builder.GetConnectionString("DefaultConnection");

            var optionsBuilder = new DbContextOptionsBuilder<LimpiciiDbContext>();
            optionsBuilder.UseSqlServer(connectionString);

            return new LimpiciiDbContext(optionsBuilder.Options);
        }
    }
}
