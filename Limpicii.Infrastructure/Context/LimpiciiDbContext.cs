using Limpicii.Domain.Entities;
using Limpicii.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Limpicii.Infrastructure.Context
{
    public class LimpiciiDbContext: DbContext
    {

        // Define DbSets for each entity in the domain model
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Permission> Permissions => Set<Permission>();
        public DbSet<RolePermission> RolePermissions => Set<RolePermission>();
        public DbSet<TennisCourt> TennisCourts { get; set; }
        public DbSet<Rental> Rentals { get; set; }


        // Constructor that accepts DbContextOptions and passes them to the base class
        public LimpiciiDbContext(DbContextOptions<LimpiciiDbContext> options) : base(options) { }

        // OnModelCreating method to configure the model
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Table mappings & keys
            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("Users");
                entity.HasKey(e => e.UserId);
                entity.Property(e => e.UserId).ValueGeneratedOnAdd();
                entity.Property(e => e.Email).HasMaxLength(255).IsRequired();
                entity.Property(e => e.FirstName).HasMaxLength(255).IsRequired();
                entity.Property(e => e.LastName).HasMaxLength(255).IsRequired();
                entity.Property(e => e.PhoneNumber).HasMaxLength(255).IsRequired();

                entity.HasOne(e => e.Role)
                      .WithMany(r => r.Users)
                      .HasForeignKey(e => e.RoleId);
            });

            modelBuilder.Entity<Role>(entity =>
            { 
                entity.ToTable("Role");
                entity.HasKey(e => e.RoleId);
                entity.Property(e => e.RoleId).ValueGeneratedOnAdd();
                entity.Property(e => e.Name).HasMaxLength(255).IsRequired();
            });


            modelBuilder.Entity<Permission>(entity =>
            {
                entity.ToTable("Permission");
                entity.HasKey(e => e.PermissionId);
                entity.Property(e => e.PermissionId).ValueGeneratedOnAdd();
                entity.Property(e => e.Name).HasMaxLength(255).IsRequired();
            });

            modelBuilder.Entity<RolePermission>(entity =>
            {
                entity.ToTable("RolePermission");

                // Composite key
                entity.HasKey(e => new { e.RoleId, e.PermissionId });

                entity.HasOne(rp => rp.Role)
                      .WithMany(r => r.RolePermissions)
                      .HasForeignKey(rp => rp.RoleId);

                entity.HasOne(rp => rp.Permission)
                      .WithMany(p => p.RolePermissions)
                      .HasForeignKey(rp => rp.PermissionId);
            });

            modelBuilder.Entity<TennisCourt>(entity =>
            {
                entity.ToTable("TennisCourt");
                entity.HasKey(e => e.TennisCourtId);
                entity.Property(e => e.TennisCourtId).ValueGeneratedOnAdd();
                entity.Property(e => e.Name).HasMaxLength(255).IsRequired();
                entity.Property(e => e.Description).HasMaxLength(255).IsRequired();
            });

            modelBuilder.Entity<Rental>(entity =>
            {
                entity.ToTable("Rentals");
                entity.HasKey(e => e.RentalId);
                entity.Property(e => e.RentalId).ValueGeneratedOnAdd();


                // Enum mapping: store as int (minutes)
                entity.Property(e => e.Duration)
                      .HasConversion(new EnumToNumberConverter<RentalDuration, int>());

                entity.HasOne(r => r.User)
                      .WithMany(u => u.Rentals)
                      .HasForeignKey(r => r.UserId);

                entity.HasOne(r => r.TennisCourt)
                      .WithMany(tc => tc.Rentals)
                      .HasForeignKey(r => r.TennisCourtId);
            });
        }

    }
}
