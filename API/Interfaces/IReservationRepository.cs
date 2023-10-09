using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Interfaces
{
    public interface IReservationRepository
    {
        Task AddReservation(AddReservationDto addReservationDto, int userId);
        Task<ReservationDto[]> GetReservationsByProjection(int projectionId);
        Task GetReservationsForUser(int userId);
        Task<bool> SaveAllAsync();

    }
}