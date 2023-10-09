using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Seat
    {
        public int Id { get; set; }
        public int Number { get; set; }
        public Projection Projection { get; set; }
        public int ProjectionId { get; set; }
        public bool Available { get; set; }
        public Reservation Reservation { get; set; }
        public int? ReservationId { get; set; } = null;

    }
}