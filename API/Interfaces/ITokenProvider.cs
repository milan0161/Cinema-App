
using API.Entities;

namespace API.Interfaces
{
    public interface ITokenProvider
    {
        string GenerateJWT(User user);
    }
}