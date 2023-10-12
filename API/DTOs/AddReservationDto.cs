
namespace API.DTOs
{
    public sealed class AddReservationDto
    {
        public int[] SeatsNumber { get; set; }
        public int ProjectionId { get; set; }
    }
}