using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace API.Helpers
{

    public class TokenProvider : ITokenProvider
    {
        private readonly SymmetricSecurityKey _key;
        private readonly UserManager<User> _userManager;
        public TokenProvider(IConfiguration config, UserManager<User> userManager)
        {
            this._userManager = userManager;
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["AccessTokenKey"]));
        }
        public async Task<string> GenerateJWT(User user)
        {
            var claims = new List<Claim> {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email)

             };

            var roles = await _userManager.GetRolesAsync(user);

            claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            var signingCredentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            //Morao je da se koristi token descriptor iz razloga sto sam dodao claim "Role" koji dolazi iz UserManager klase pa on mora da se doda kao novi ClaimsIdentity
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddHours(1),
                SigningCredentials = signingCredentials
            };
            // var tokene = new JwtSecurityToken(

            //     claims: claims,
            //     expires: DateTime.Now.AddHours(1),
            //     signingCredentials: signingCredentials
            // );

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            // .WriteToken(token);
            return tokenHandler.WriteToken(token);
        }
    }
}