using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;

namespace API.DTOs
{
    public sealed class MovieDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Duration { get; set; }
        public string Genre { get; set; }
        public int Year { get; set; }
        public string Actors { get; set; }
        public string Director { get; set; }
        public string Description { get; set; }
        public string MainPhoto { get; set; }
        public CoverPhoto CoverPhoto { get; set; }
        public IEnumerable<Projection> Projections { get; set; }
    }
}