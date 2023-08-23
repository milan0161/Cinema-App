
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class ProjectionRepository : IProjectionRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public ProjectionRepository(DataContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;

        }

        public async Task AddProjectionAsync(Projection projection)
        {
            await _context.Projections.AddAsync(projection);
        }

        public async Task<ProjectionDto> EditProjectionAsync(AddProjectionDto addProjectionDto, int id)
        {
            var projection = await _context.Projections.FirstOrDefaultAsync(x => x.Id == id);
            projection.HallId = addProjectionDto.HallId;
            projection.MovieId = addProjectionDto.MovieId;
            projection.TicketPrice = addProjectionDto.TicketPrice;
            projection.ShowingTime = addProjectionDto.ShowingTime;
            _context.Projections.Update(projection);

            return _mapper.Map<ProjectionDto>(projection);
        }



        public async Task<ProjectionDto> GetProjectionAsync(int id)
        {

            return await _context.Projections.Where(x => x.Id == id).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();

        }

        public async Task<List<ProjectionDto>> GetProjectionsByDateAsync(DateOnly date)
        {
            var query = _context.Projections
             .AsQueryable();

            var projections = query.Where(
              p => DateOnly.FromDateTime(p.ShowingTime) == date
            ).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();
            return await projections;


        }

        public async Task<List<ProjectionDto>> GetProjectionsByHall(int hallId)
        {
            return await _context.Projections.Where(x => x.HallId == hallId).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public async Task RemoveProjectionAsync(int id)
        {
            var projection = await _context.Projections.FindAsync(id);
            _context.Projections.Remove(projection);

        }
        public async Task<bool> IsProjectionExsist(int id)
        {
            return await _context.Projections.AnyAsync(x => x.Id == id);
        }
        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<ProjectionDto>> GetAllProjectionsAsync()
        {

            return await _context.Projections.ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();

        }


    }
}