namespace API.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Duration { get; set; }
        public string Genre { get; set; }
        public string Actors { get; set; }
        public string Director { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
    }
}