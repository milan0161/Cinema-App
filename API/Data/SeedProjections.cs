using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SeedProjections
    {

        public static async Task AddProjections(DataContext context)
        {

            if (await context.Halls.AnyAsync()) return;
            Hall hall1 = new Hall
            {
                Name = "MainHall",

            };
            Hall hall2 = new Hall
            {
                Name = "SideHall"
            };

            await context.Halls.AddRangeAsync(hall1, hall2);
            await context.SaveChangesAsync();


        }


    }
}