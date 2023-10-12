
using API.DTOs;

namespace API.Interfaces
{
    public interface IAuthService
    {
        Task<UserDto> Register(RegisterDto registerDto);
        Task<UserDto> Login(LoginDto logindto);
    }
}