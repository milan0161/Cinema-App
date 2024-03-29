namespace API.Entities
{
    public class Movie : BaseEntity
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