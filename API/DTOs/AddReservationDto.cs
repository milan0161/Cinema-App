using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class AddReservationDto
    {
        public int[] SeatsNumber { get; set; }
        public int ProjectionId { get; set; }
    }
}