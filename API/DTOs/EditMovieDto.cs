
namespace API.DTOs
{
    public sealed class EditMovieDto
    {
        public string Name { get; set; }
        public string Country { get; set; }
        public int Duration { get; set; }
        public string Genre { get; set; }
        public int Year { get; set; }
        public string Actors { get; set; }
        public string Director { get; set; }
        public string Description { get; set; }
    }
}