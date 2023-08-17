using API.Data;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Repositories
{
    public class MovieRepository : IMovieRepository
    {
        private readonly DataContext _context;
        public MovieRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Movie> GetMovieById(int id)
        {
            return await _context.Movies.Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Movie> GetMovieByName(string name)
        {
            return await _context.Movies.Where(x => x.Name == name).FirstOrDefaultAsync();
        }

        public async Task<List<Movie>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }
    }
}