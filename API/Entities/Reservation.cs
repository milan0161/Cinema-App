using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public Projection Projection { get; set; }
        public int ProjectionId { get; set; }
        public IEnumerable<Seat> Seats { get; set; }
    }
}