using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Hall
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Projection> Projections { get; set; }

    }
}