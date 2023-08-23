using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class MovieController : BaseApiController
    {
        private readonly IMovieRepository _movieRepository;
        private readonly IWebHostEnvironment _environment;
        public MovieController(IMovieRepository movieRepository, IWebHostEnvironment environment)
        {
            _movieRepository = movieRepository;
            _environment = environment;
        }

        [HttpGet]
        public async Task<ActionResult<List<MovieDto>>> GetMovies()
        {
            return Ok(await _movieRepository.GetMovies());

        }

        [HttpGet("get-single-movie/{id}")]
        public async Task<ActionResult<MovieDetailsDto>> GetMovieById(int id)
        {
            var movie = await _movieRepository.GetMovieById(id);
            if (movie != null)
            {
                return Ok(movie);
            }
            return BadRequest("Can not find movie");
            // return Ok(await _movieRepository.GetMovieById(id));
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<MovieDetailsDto>> GetMovieByName(string name)
        {
            var movie = await _movieRepository.GetMovieByName(name);
            if (movie != null)
            {
                return Ok(movie);
            }
            return BadRequest("Can not find movie");
        }
        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("add-movie")]
        public async Task<ActionResult> AddMovie([FromForm] AddMovieDto addMovieDto)
        {
            if (await _movieRepository.MovieExsist(addMovieDto.Name, addMovieDto.Duration)) return BadRequest("Movie already exsist");

            var movie = new Movie
            {
                Actors = addMovieDto.Actors,
                Country = addMovieDto.Country,
                Description = addMovieDto.Description,
                Director = addMovieDto.Director,
                Year = addMovieDto.Year,
                Genre = addMovieDto.Genre,
                Duration = addMovieDto.Duration,
                Name = addMovieDto.Name,
            };

            var folderPath = GetFilePath(movie.Name);
            if (!System.IO.File.Exists(folderPath))
            {
                System.IO.Directory.CreateDirectory(folderPath);
            }

            var size = addMovieDto.MainPhoto.Length;

            string[] permittedExt = { ".png", ".jpg", ".jpeg" };
            var ext = Path.GetExtension(addMovieDto.MainPhoto.FileName).ToLowerInvariant();
            if (string.IsNullOrEmpty(ext) || !permittedExt.Contains(ext))
            {
                return BadRequest("Unsuported image type");
            }
            string imagePath = folderPath + @"\MainImage.png";

            using (FileStream stream = System.IO.File.Create(imagePath))
            {
                await addMovieDto.MainPhoto.CopyToAsync(stream);
            }

            var path = imagePath.Split("wwwroot");

            movie.MainPhoto = path[1];
            _movieRepository.AddMovieAsync(movie);
            if (await _movieRepository.SaveAllAsync()) return Ok();
            return BadRequest("Couldn't add Movie");

        }

        [NonAction]
        private string GetFilePath(string movieName)
        {
            return _environment.WebRootPath + @"\Uploads\Movies\" + movieName;
        }


    }
}