
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Http.HttpResults;
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

        public async Task<Projection> AddProjectionAsync(AddProjectionDto addProjectionDto)
        {
            var hall = await _context.Halls.Where(x => x.Name == addProjectionDto.HallName).Select(x => x.Id).FirstOrDefaultAsync();
            DateTime currentDate = DateTime.Now.AddHours(12).ToUniversalTime();
            if (currentDate > addProjectionDto.ShowingTime.ToUniversalTime())
            {
                throw new Exception("You cannot add a projection in the past");
            }
            var projection = new Projection
            {
                HallId = hall,
                MovieId = addProjectionDto.MovieId,
                ShowingTime = addProjectionDto.ShowingTime.ToUniversalTime(),
                TicketPrice = addProjectionDto.TicketPrice,
                Reservations = new List<Reservation>()
            };

            int numberOfSeats = addProjectionDto.HallName.Equals("MainHall") ? 100 : 70;
            // int numberOfSeats;
            // if (addProjectionDto.HallName.Equals("MainHall")) numberOfSeats = 100;
            // else numberOfSeats = 70;

            List<Seat> seats = new List<Seat>();

            for (int i = 0; i < numberOfSeats; i++)
            {
                seats.Add(new Seat
                {
                    Number = i + 1,
                    Projection = projection,
                    Available = true,

                });
            }
            projection.Seats = seats;
            await _context.Projections.AddAsync(projection);
            return projection;
        }

        public async Task<ProjectionDto> EditProjectionAsync(AddProjectionDto addProjectionDto, int id)
        {
            var hallId = await _context.Halls.Where(x => x.Name == addProjectionDto.HallName).Select(x => x.Id).FirstOrDefaultAsync();
            var projection = await _context.Projections.FirstOrDefaultAsync(x => x.Id == id);
            projection.TicketPrice = addProjectionDto.TicketPrice;
            projection.ShowingTime = addProjectionDto.ShowingTime.ToUniversalTime();
            projection.HallId = hallId;
            _context.Projections.Update(projection);
            if (!await this.SaveAllAsync()) throw new Exception("Could not update projection");

            return _mapper.Map<ProjectionDto>(projection);
        }



        public async Task<ProjectionDetailsDto> GetProjectionAsync(int id)
        {


            return await _context.Projections.Where(x => x.Id == id).ProjectTo<ProjectionDetailsDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();

        }

        public async Task<IEnumerable<ProjectionDto>> GetProjectionsByDateAsync(string date)
        {
            var datum = date.Split('-');
            var dateOnly = new DateTime(int.Parse(datum[0]), int.Parse(datum[1]), int.Parse(datum[2]));


            // var query = _context.Projections
            //  .AsQueryable();
            // var projections = _context.Projections.Where(x => DateOnly.FromDateTime(x.ShowingTime).Equals(dateOnly));
            // var p = await projections.ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToArrayAsync();
            // var projections = query.Where(
            //   p => DateOnly.FromDateTime(p.ShowingTime).Equals(dateOnly)
            // ).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();



            var projections = await _context.Projections.Where(x => x.ShowingTime.Date.Equals(dateOnly)).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToArrayAsync();


            return projections;


        }

        public async Task<List<ProjectionDto>> GetProjectionsByHall(int hallId)
        {
            return await _context.Projections.Where(x => x.HallId == hallId).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();
        }

        public async Task RemoveProjectionAsync(int id)
        {
            Projection projection = await _context.Projections.FirstOrDefaultAsync(x => x.Id == id);
            _context.Projections.Remove(projection);
            if (!await this.SaveAllAsync()) throw new Exception("Could not delete projection");
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

            return await _context.Projections.ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).OrderBy(x => x.ShowingTime).ToListAsync();

        }

        public async Task<List<ProjectionDto>> GetNewProjections()
        {
            var projections = await _context.Projections.OrderByDescending(x => x.ShowingTime).Take(6).ProjectTo<ProjectionDto>(_mapper.ConfigurationProvider).ToListAsync();
            return projections;
        }
    }
}