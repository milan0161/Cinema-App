using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;

namespace API.Interfaces
{
    public interface IAdminRepository
    {
        Task<DashboardInfoDto> GetDashboardInfo();
        Task<string[]> GetUsersEmails();
        Task<ReservationDto[]> GetReservationsByUserEmail(string email);
        Task<ReservationDto[]> GetReservationsForProjection(int projectionId);
    }
}