
using API.Entities;

namespace API.Interfaces
{
    public interface ITokenProvider
    {
        Task<string> GenerateJWT(User user);
    }
}