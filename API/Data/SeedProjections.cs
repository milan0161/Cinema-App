using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
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
            // Hall hall2 = new Hall
            // {
            //     Name = "SideHall"
            // };

            var seats = new List<Seat>();

            for (int i = 0; i < 100; i++)
            {
                seats.Add(new Seat
                {
                    Available = true,
                    Hall = hall1,
                    Number = i + 1

                });
            }

            hall1.Seats = seats;

            await context.Halls.AddAsync(hall1);
            foreach (Seat seat in seats)
            {
                await context.AddAsync(seat);
            }
            await context.SaveChangesAsync();


        }


    }
}