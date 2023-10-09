using API.Data;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class HallRepository : IHallRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public HallRepository(DataContext context, IMapper mapper)
        {
            this._mapper = mapper;
            this._context = context;

        }
        public async Task<HallDto[]> GetHalls()
        {
            return await _context.Halls.ProjectTo<HallDto>(_mapper.ConfigurationProvider).ToArrayAsync();
        }

    }
}