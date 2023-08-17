using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class MovieController : BaseApiController
    {
        private readonly IMovieRepository _movieRepository;
        public MovieController(IMovieRepository movieRepository)
        {
            _movieRepository = movieRepository;
        }

        [HttpGet]
        public async Task<ActionResult> GetMovies()
        {
            return Ok(await _movieRepository.GetMovies());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetMovieById(int id)
        {
            return Ok(await _movieRepository.GetMovieById(id));
        }

        [HttpGet("{name}")]
        public async Task<ActionResult> GetMovieByName(string name)
        {
            return Ok(await _movieRepository.GetMovieByName(name));
        }

        
    }
}