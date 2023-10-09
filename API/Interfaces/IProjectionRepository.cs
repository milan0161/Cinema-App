using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IProjectionRepository
    {
        Task<Projection> AddProjectionAsync(AddProjectionDto addProjectionDto);
        Task RemoveProjectionAsync(int id);
        Task<ProjectionDetailsDto> GetProjectionAsync(int id);
        Task<IEnumerable<ProjectionDto>> GetAllProjectionsAsync();
        Task<IEnumerable<ProjectionDto>> GetProjectionsByDateAsync(string date);
        Task<List<ProjectionDto>> GetNewProjections();
        Task<ProjectionDto> EditProjectionAsync(AddProjectionDto addProjectionDto, int id);
        Task<List<ProjectionDto>> GetProjectionsByHall(int hallId);
        Task<bool> SaveAllAsync();


    }
}