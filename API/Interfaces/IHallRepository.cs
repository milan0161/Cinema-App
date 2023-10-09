using API.DTOs;

namespace API.Interfaces
{
    public interface IHallRepository
    {
        Task<HallDto[]> GetHalls();
    }
}