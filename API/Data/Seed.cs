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
    }
}