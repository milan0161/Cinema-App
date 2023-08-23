using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public class ProjectionDto
    {
        public int Id { get; set; }
        public Movie Movie { get; set; }
        public DateTime ShowingTime { get; set; }
        public Hall Hall { get; set; }
        public int TicketPrice { get; set; }
    }
}