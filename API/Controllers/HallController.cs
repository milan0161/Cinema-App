using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class HallController : BaseApiController
    {
        private readonly IHallRepository _hallRepository;

        public HallController(IHallRepository hallRepository)
        {
            this._hallRepository = hallRepository;

        }

        [HttpGet]
        public async Task<ActionResult<HallDto[]>> GetHalls()
        {
            return await _hallRepository.GetHalls();
        }

    }
}