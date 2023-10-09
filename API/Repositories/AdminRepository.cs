using API.Data;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public AdminRepository(DataContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;


        }
        public async Task<DashboardInfoDto> GetDashboardInfo()
        {
            var moviesCount = await _context.Movies.CountAsync();
            var projectionsCount = await _context.Projections.CountAsync();
            int income = 0;
            int ticketSold = 0;
            var projections = await _context.Projections.Select(x => new
            {
                seats = x.Seats.ToArray(),
                x.TicketPrice
            }).ToArrayAsync();
            for (int i = 0; i < projections.Length; i++)
            {
                var price = projections[i].TicketPrice;
                int unavailableSeats = projections[i].seats.Where(x => x.Available == false).Count();
                ticketSold += unavailableSeats;
                income = income + (price * unavailableSeats);
            }

            return new DashboardInfoDto
            {
                MovieCount = moviesCount,
                ProjectionsCount = projectionsCount,
                Income = income,
                TicketSold = ticketSold

            };
        }



        public async Task<ReservationDto[]> GetReservationsByUserEmail(string email)
        {
            var reservations = await _context.Reservations.Where(x => x.User.Email == email).ProjectTo<ReservationDto>(_mapper.ConfigurationProvider).OrderBy(x => x.ShowingTime).ToArrayAsync();
            return reservations;
        }

        public async Task<ReservationDto[]> GetReservationsForProjection(int projectionId)
        {
            var reservation = await _context.Reservations.Where(x => x.ProjectionId == projectionId).ProjectTo<ReservationDto>(_mapper.ConfigurationProvider).ToArrayAsync();
            return reservation;
        }

        public async Task<string[]> GetUsersEmails()
        {
            return await _context.Reservations.Select(x => x.User.Email).Distinct().ToArrayAsync();
        }

    }
}