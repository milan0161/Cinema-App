using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : IdentityDbContext<User, Role, int, IdentityUserClaim<int>, UserRole, IdentityUserLogin<int>,
     IdentityRoleClaim<int>, IdentityUserToken<int>>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Projection> Projections { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        public override int SaveChanges()
        {
            AddTimeStamps();
            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            AddTimeStamps();
            return await base.SaveChangesAsync(cancellationToken);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<User>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.User)
                .HasForeignKey(ur => ur.UserId)
                .IsRequired();

            builder.Entity<Role>()
                .HasMany(ur => ur.UserRoles)
                .WithOne(u => u.Role)
                .HasForeignKey(ur => ur.RoleId)
                .IsRequired();




            builder.Entity<Movie>()
                .HasMany(m => m.Projections)
                .WithOne(pr => pr.Movie)
                .HasForeignKey(m => m.MovieId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Hall>()
                .HasMany(h => h.Projections)
                .WithOne(pr => pr.Hall)
                .HasForeignKey(pr => pr.HallId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Projection>()
                .HasMany(h => h.Seats)
                .WithOne(h => h.Projection)
                .HasForeignKey(s => s.ProjectionId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Projection>()
                .HasMany(h => h.Reservations)
                .WithOne(h => h.Projection)
                .HasForeignKey(p => p.ProjectionId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Reservation>()
                .HasMany(s => s.Seats)
                .WithOne(r => r.Reservation)
                .HasForeignKey(s => s.ReservationId)
                .OnDelete(DeleteBehavior.NoAction)
                .IsRequired(false);

            builder.Entity<Seat>()
                .HasOne(s => s.Reservation)
                .WithMany(s => s.Seats)
                .HasForeignKey(s => s.ReservationId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.NoAction);
        }

        private void AddTimeStamps()
        {
            var entities = ChangeTracker.Entries().Where(x => x.Entity is BaseEntity && (x.State is EntityState.Added || x.State is EntityState.Modified));

            foreach (var entity in entities)
            {
                var dateNow = DateTime.Now;

                if (entity.State is EntityState.Added)
                {
                    ((BaseEntity)entity.Entity).CreatedAt = dateNow;
                }

                ((BaseEntity)entity.Entity).UpdatedAt = dateNow;
            }

        }

    }
}