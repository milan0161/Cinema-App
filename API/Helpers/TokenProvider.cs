using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;

using Microsoft.IdentityModel.Tokens;

namespace API.Helpers
{

    public class TokenProvider : ITokenProvider
    {
        private readonly SymmetricSecurityKey _key;
        public TokenProvider(IConfiguration config)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["AccessTokenKey"]));
        }
        public string GenerateJWT(User user)
        {
            var claims = new Claim[] {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email)
             };
            var signingCredentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);
            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: signingCredentials
            );
            // var tokenDescirption = new SecurityTokenDescriptor{
            //     Subject = new ClaimsIdentity(claims),
            //     Expires = DateTime.Now.AddHours(1),
            //     SigningCredentials = signingCredentials
            // };
            string tokenValue = new JwtSecurityTokenHandler().WriteToken(token);
            return tokenValue;
        }
    }
}