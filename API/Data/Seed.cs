using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
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
    }
}