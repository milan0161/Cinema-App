using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IMovieRepository
    {
        Task<List<Movie>> GetMovies();
        Task<Movie> GetMovieById(int id);
        Task<Movie> GetMovieByName(string name);
        void AddMovieAsync(Movie movie);
        public Task<bool> MovieExsist(string movieName, int movieLength);
        Task<bool> SaveAllAsync();
    }
}