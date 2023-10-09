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
        Task AddMovieAsync(Movie movie);
        Task<bool> MovieExsist(string movieName, int movieLength);
        Task EditMovie(EditMovieDto editMovieDto, int movieId);
        Task<Movie> GetMovie(int id);
        Task<List<string>> GetFiveMovieImages();
        Task<bool> SaveAllAsync();
    }
}