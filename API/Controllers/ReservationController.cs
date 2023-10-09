

using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ReservationController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IReservationRepository _reservationRepository;

        public ReservationController(IMapper mapper, IReservationRepository reservationRepository)
        {
            this._reservationRepository = reservationRepository;
            this._mapper = mapper;


        }
        [Authorize]
        [HttpPost]
        public async Task<ActionResult> ReserveTicket([FromBody] AddReservationDto addReservationDto)
        {
            var userId = User.GetUserId();
            await _reservationRepository.AddReservation(addReservationDto, userId);
            if (!await _reservationRepository.SaveAllAsync()) return BadRequest("Could not save reservation, try again later");

            return Ok();
        }
        [Authorize]
        [HttpGet("get-reservations-for-projection/{id}")]
        public async Task<ActionResult<IEnumerable<ReservationDto>>> GetReservationsForProjection(int id)
        {
            ReservationDto[] reservations = await _reservationRepository.GetReservationsByProjection(id);

            return Ok(reservations);
        }

    }
}