
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjectionController : BaseApiController
    {
        private readonly IProjectionRepository _projectionRepository;
        private readonly IMapper _mapper;
        public ProjectionController(IProjectionRepository projectionRepository, IMapper mapper)
        {
            this._mapper = mapper;
            this._projectionRepository = projectionRepository;

        }
        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("add-new-projection")]
        public async Task<ActionResult<Projection>> AddNewProjection(AddProjectionDto addProjectionDto)
        {
            var projection = new Projection
            {
                MovieId = addProjectionDto.MovieId,
                HallId = addProjectionDto.HallId,
                ShowingTime = addProjectionDto.ShowingTime.ToUniversalTime(),
                TicketPrice = addProjectionDto.TicketPrice
            };
            await _projectionRepository.AddProjectionAsync(projection);
            if (!await _projectionRepository.SaveAllAsync())
            {
                return BadRequest("Could not add Projection");
            }
            return Ok();

        }
        [HttpGet("get-projections")]
        public async Task<ActionResult<List<ProjectionDto>>> GetAllProjections()
        {
            var projections = await _projectionRepository.GetAllProjectionsAsync();

            return Ok(projections);

        }
        [HttpGet("get-single-projection/{id}")]
        public async Task<ActionResult<ProjectionDto>> GetSingleProjection(int id)
        {
            var projection = await _projectionRepository.GetProjectionAsync(id);
            if (projection is null) return NotFound("Could not find projection");
            return Ok(projection);
        }
        [HttpGet("get-projection-by-hall/{hallId}")]
        public async Task<ActionResult<List<ProjectionDto>>> GetProjectionByHall(int hallId)
        {
            var projection = await _projectionRepository.GetProjectionsByHall(hallId);
            if (projection.Count == 0) return NotFound("Could not find any projection in this hall");
            return Ok(projection);
        }
        [HttpGet("get-projections-by-date/{date}")]
        public async Task<ActionResult<List<ProjectionDto>>> GetProjectionsByDate(DateOnly date)
        {
            var projections = await _projectionRepository.GetProjectionsByDateAsync(date);
            return Ok(projections);
        }
        [HttpPut("edit-projection/{id}")]
        public async Task<ActionResult<ProjectionDto>> EditProjection([FromBody] AddProjectionDto addProjectionDto, int id)
        {
            var projection = await _projectionRepository.EditProjectionAsync(addProjectionDto, id);
            return Ok(projection);
        }
    }
}