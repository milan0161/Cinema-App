using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interfaces
{
    public interface IMovieRepository
    {
        Task<List<MovieDto>> GetMovies();
        Task<MovieDetailsDto> GetMovieById(int id);
        Task<MovieDetailsDto> GetMovieByName(string name);
        void AddMovieAsync(Movie movie);
        public Task<bool> MovieExsist(string movieName, int movieLength);
        Task<bool> SaveAllAsync();
    }
}