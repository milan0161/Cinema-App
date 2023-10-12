
namespace API.DTOs
{
    public sealed class ReservationDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string MovieName { get; set; }
        public DateTime ShowingTime { get; set; }
        public int[] Seats { get; set; }

    }
}