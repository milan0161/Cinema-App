using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IProjectionRepository
    {
        Task AddProjectionAsync(Projection projection);
        Task RemoveProjectionAsync(int id);
        Task<ProjectionDto> GetProjectionAsync(int id);
        Task<IEnumerable<ProjectionDto>> GetAllProjectionsAsync();
        Task<List<ProjectionDto>> GetProjectionsByDateAsync(DateOnly date);
        Task<ProjectionDto> EditProjectionAsync(AddProjectionDto addProjectionDto, int id);
        Task<List<ProjectionDto>> GetProjectionsByHall(int hallId);
        Task<bool> SaveAllAsync();

    }
}