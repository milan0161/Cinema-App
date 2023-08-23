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
        public Hall Hall { get; set; }
        public int HallId { get; set; }
        public bool Available { get; set; }
    }
}