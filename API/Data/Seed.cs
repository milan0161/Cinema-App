using System.Text.Json;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<User> userManager, RoleManager<Role> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;
            // var userData = await File.ReadAllTextAsync("@Data/SeedData.json");

            // var options  = new JsonSerializerOptions {
            //     PropertyNameCaseInsensitive = true
            // };

            // var users = JsonSerializer.Deserialize<List<User>>(userData);

            var roles = new List<Role>
            {
                new Role{Name = "Admin"},
                new Role {Name = "Client"}
            };

            foreach (Role role in roles)
            {
                await roleManager.CreateAsync(role);
            };
            var admin = new User
            {
                Email = "admin@email.com",
                UserName = "Admin"
            };
            await userManager.CreateAsync(admin, "admin123");
            await userManager.AddToRoleAsync(admin, "Admin");
        }

        public static async Task SeedMovies(DataContext context)
        {
            if (await context.Movies.AnyAsync()) return;

            var moviesData = await File.ReadAllTextAsync(@"Data/MovieSeedData.json");

            var movies = JsonSerializer.Deserialize<List<Movie>>(moviesData);

            foreach (Movie movie in movies)
            {
                context.Movies.Add(movie);
            }

            await context.SaveChangesAsync();
        }
        public static async Task SeedProjection(DataContext context)
        {
            if (await context.Projections.AnyAsync()) return;

            var initialTime = DateTime.UtcNow.AddDays(1);
            var showingTime = DateTime.UtcNow.AddDays(1);
            var hall = context.Halls.SingleOrDefault(x => x.Id == 1);
            var movies = await context.Movies.ToArrayAsync();

            var projections = new List<Projection>();
            int counter = 1;
            for (int i = 0; i < movies.Length; i++)
            {
                var projection = new Projection
                {
                    Hall = hall,
                    Movie = movies[i],
                    ShowingTime = showingTime,
                    TicketPrice = 22
                };
                projection.Seats = CreateSeats(100, projection);
                projections.Add(projection);
                if (i % 3 == 0)
                {
                    showingTime = initialTime.AddDays(counter);
                    counter++;
                }
                showingTime = showingTime.AddHours(3);
            }
            await context.Projections.AddRangeAsync(projections);
            await context.SaveChangesAsync();

        }

        public static async Task SeedCoverPhotos(DataContext context)
        {
            var coverPhotosData = await File.ReadAllTextAsync(@"Data/CoverPhotoSeedData.json");

            var coverPhotos = JsonSerializer.Deserialize<List<CoverPhoto>>(coverPhotosData);
            bool hasCoverPhotos = false;
            foreach (CoverPhoto coverPhoto in coverPhotos)
            {
                var movie = await context.Movies.SingleOrDefaultAsync(x => x.Id == coverPhoto.MovieId);
                if (movie.CoverPhoto is null)
                {
                    movie.CoverPhoto = coverPhoto;

                }
                else
                {
                    hasCoverPhotos = true;
                    break;
                }
            }
            if (hasCoverPhotos is true) return;
            await context.SaveChangesAsync();

        }

        private static List<Seat> CreateSeats(int numberOfSeats, Projection projection)
        {
            List<Seat> seats = new List<Seat>();
            for (int i = 0; i < numberOfSeats; i++)
            {
                seats.Add(new Seat
                {
                    Available = true,
                    Number = i + 1,
                    Projection = projection
                });
            }

            return seats;
        }

    }
}