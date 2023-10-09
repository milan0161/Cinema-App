using API.DTOs;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class AdminController : BaseApiController
    {
        private readonly IAdminRepository _adminRepository;

        public AdminController(IAdminRepository adminRepository)
        {
            this._adminRepository = adminRepository;

        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet]
        public async Task<ActionResult<DashboardInfoDto>> GetDashboardInfo()
        {
            var dashboardInfo = await _adminRepository.GetDashboardInfo();
            return dashboardInfo;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("get-users-list")]
        public async Task<ActionResult<string[]>> GetUsersList()
        {
            return await _adminRepository.GetUsersEmails();
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("get-reservation-by-email/{email}")]
        public async Task<ActionResult<ReservationDto[]>> GetReservationsByEmail(string email)
        {
            return await _adminRepository.GetReservationsByUserEmail(email);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("get-reservations-for-projection/{projectionId}")]
        public async Task<ActionResult<ReservationDto[]>> GetReservationsForProjection(int projectionId)
        {

            return await _adminRepository.GetReservationsForProjection(projectionId);

        }

    }
}