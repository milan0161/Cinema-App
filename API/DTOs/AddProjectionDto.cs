namespace API.DTOs
{
    public sealed class AddProjectionDto
    {
        public int MovieId { get; set; }
        public DateTime ShowingTime { get; set; }
        public string HallName { get; set; }
        public int TicketPrice { get; set; }
    }
}