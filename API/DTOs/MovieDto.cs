

namespace API.DTOs
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Duration { get; set; }
        public string MainPhoto { get; set; }
        public string Genre { get; set; }
        public int Year { get; set; }
    }
}