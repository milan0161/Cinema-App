using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
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

        public async Task AddMovieAsync(Movie movie)
        {
            await _context.AddAsync(movie);

        }

        public async Task<MovieDetailsDto> GetMovieById(int id)
        {

            return await _context.Movies.Where(x => x.Id == id).ProjectTo<MovieDetailsDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();
        }

        public async Task<Movie> GetMovie(int id)
        {
            return await _context.Movies.Include(x => x.CoverPhoto).FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<MovieDetailsDto> GetMovieByName(string name)
        {
            return await _context.Movies.Where(x => x.Name == name).ProjectTo<MovieDetailsDto>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();
        }

        public async Task<PaginationResponse<List<MovieDto>>> GetMovies(SearchMovieDto searchMovieDto)
        {
            var searchTerm = searchMovieDto.SearchTerm ?? "";
            // var movies = await _context.Movies.Where(x => x.Name.StartsWith(searchTerm)).ToListAsync();
            // return _mapper.Map<List<MovieDto>>(movies);
            var moviesQuery = _context.Movies.AsQueryable();
            int total = await moviesQuery.CountAsync();
            int totalPages = (int)Math.Ceiling(total / (double)searchMovieDto.PageSize);
            if (searchMovieDto.PageNumber > totalPages)
            {
                throw new Exception("no more pages to display");
            }

            moviesQuery = moviesQuery.Where(x => x.Name.Contains(searchTerm)).Skip((searchMovieDto.PageNumber - 1) * searchMovieDto.PageSize).Take(searchMovieDto.PageSize);
            // moviesQuery = moviesQuery.Where(x => x.Name.StartsWith(searchTerm) && x.Id > searchMovieDto.Cursor)
            //     .Take(10)
            //     .OrderBy(x => x.Id);
            var movies = await moviesQuery.ProjectTo<MovieDto>(_mapper.ConfigurationProvider).ToListAsync();
            long cursor = movies[^1].Id;

            return new PaginationResponse<List<MovieDto>>(total, totalPages, movies);


        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
        public async Task<bool> MovieExsist(string movieName, int movieLength)
        {
            return await _context.Movies.AnyAsync(x => x.Name == movieName && x.Duration == movieLength);
        }

        public async Task EditMovie(EditMovieDto editMovieDto, int movieId)
        {
            var movie = await this.GetMovie(movieId);
            _mapper.Map(editMovieDto, movie);
        }

        public async Task<List<string>> GetFiveMovieImages()
        {
            var images = await _context.Movies.OrderByDescending(x => x.CreatedAt).Take(5).Select(x => x.CoverPhoto.Photo).ToListAsync();
            return images;
        }
    }
}