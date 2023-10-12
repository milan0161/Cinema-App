using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IMovieRepository
    {
        Task<PaginationResponse<List<MovieDto>>> GetMovies(SearchMovieDto searchMovieDto);
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