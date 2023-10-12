

namespace API.DTOs
{
    public sealed class RegisterDto
    {
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }

    }
}