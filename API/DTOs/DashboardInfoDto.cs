using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class DashboardInfoDto
    {
        public int MovieCount { get; set; }
        public int TicketSold { get; set; }
        public int Income { get; set; }
        public int ProjectionsCount { get; set; }
    }
}