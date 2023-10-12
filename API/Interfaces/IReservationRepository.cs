using API.DTOs;

namespace API.Interfaces
{
    public interface IReservationRepository
    {
        Task AddReservation(AddReservationDto addReservationDto, int userId);
        Task GetReservationsForUser(int userId);
        Task<bool> SaveAllAsync();

    }
}