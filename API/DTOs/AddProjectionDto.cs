namespace API.DTOs
{
    public class AddProjectionDto
    {
        public int MovieId { get; set; }
        public DateTime ShowingTime { get; set; }
        public int HallId { get; set; }
        public int TicketPrice { get; set; }
    }
}