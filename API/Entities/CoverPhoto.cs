

namespace API.Entities
{
    public class CoverPhoto
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        public string Photo { get; set; }
    }
}