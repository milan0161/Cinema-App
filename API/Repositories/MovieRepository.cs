using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
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

        public async Task<Movie> GetMovieById(int id)
        {
            return await _context.Movies.Where(x => x.Id == id).Include(x => x.CoverPhoto).FirstOrDefaultAsync();
        }

        public async Task<Movie> GetMovieByName(string name)
        {
            return await _context.Movies.Where(x => x.Name == name).FirstOrDefaultAsync();
        }

        public async Task<List<Movie>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
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