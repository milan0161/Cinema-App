using API.Entities;

namespace API.DTOs
{
    public sealed class ProjectionDto
    {
        public int Id { get; set; }
        public Movie Movie { get; set; }
        public DateTime ShowingTime { get; set; }
        public Hall Hall { get; set; }
        public int TicketPrice { get; set; }
    }
}