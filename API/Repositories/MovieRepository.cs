using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public MovieRepository(DataContext context, IMapper mapper)
        {
            this._mapper = mapper;
            _context = context;
        }

        public async void AddMovieAsync(Movie movie)
        {
            await _context.AddAsync(movie);

        }

        public async Task<MovieDetailsDto> GetMovieById(int id)
        {

            return await _context.Movies.Where(x => x.Id == id).ProjectTo<MovieDetailsDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();
        }

        public async Task<MovieDetailsDto> GetMovieByName(string name)
        {
            return await _context.Movies.Where(x => x.Name == name).ProjectTo<MovieDetailsDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();
        }

        public async Task<List<MovieDto>> GetMovies()
        {
            var movies = await _context.Movies.ToListAsync();
            return _mapper.Map<List<MovieDto>>(movies);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public async Task<bool> MovieExsist(string movieName, int movieLength)
        {
            return await _context.Movies.AnyAsync(x => x.Name == movieName && x.Duration == movieLength);
        }
    }
}