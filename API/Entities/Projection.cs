using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Projection
    {
        public int Id { get; set; }
        public DateTime ShowingTime { get; set; }
        public Movie Movie { get; set; }
        public int MovieId { get; set; }
        public IEnumerable<Seat> Seats { get; set; }
        public Hall Hall { get; set; }
        public int HallId { get; set; }
        public int TicketPrice { get; set; }
        public IEnumerable<Reservation> Reservations { get; set; } = null;

    }
}