using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ReservationRepository(DataContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;


        }
        public async Task AddReservation(AddReservationDto addReservationDto, int userId)
        {
            var reservation = new Reservation
            {
                UserId = userId,
                ProjectionId = addReservationDto.ProjectionId
            };
            var seats = await _context.Seats.Where(x => x.ProjectionId == addReservationDto.ProjectionId).ToArrayAsync();
            int numberOfSeats = addReservationDto.SeatsNumber.Length;
            var reservedSeats = new Seat[numberOfSeats];
            for (int i = 0; i < addReservationDto.SeatsNumber.Length; i++)
            {
                if (seats[addReservationDto.SeatsNumber[i] - 1].Available == false)
                {
                    throw new Exception($"Seat number {seats[addReservationDto.SeatsNumber[i] - 1].Number} is already taken. Please select the available seats ");

                }
                seats[addReservationDto.SeatsNumber[i] - 1].Available = false;
                seats[addReservationDto.SeatsNumber[i] - 1].Reservation = reservation;
                reservedSeats[i] = seats[addReservationDto.SeatsNumber[i] - 1];
                // reservation.Seats.Append(seats[addReservationDto.SeatsNumber[i] - 1]);
            }

            await _context.Reservations.AddAsync(reservation);

        }

        public async Task<ReservationDto[]> GetReservationsByProjection(int projectionId)
        {
            var reservations = await _context.Reservations.Where(x => x.ProjectionId == projectionId).ProjectTo<ReservationDto>(_mapper.ConfigurationProvider).ToArrayAsync();
            return reservations;
        }

        public Task GetReservationsForUser(int userId)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}