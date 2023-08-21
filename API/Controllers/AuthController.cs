using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  public class AuthController : BaseApiController
  {
    private readonly IMapper _mapper;
    private readonly UserManager<User> _userManager;
    private readonly ITokenProvider _tokenProvider;

    public AuthController(UserManager<User> userManager, IMapper mapper, ITokenProvider tokenProvider)
    {
      _tokenProvider = tokenProvider;
      _userManager = userManager;
      _mapper = mapper;

    }
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register([FromBody] RegisterDto registerDto)
    {
      if (await UserExists(registerDto.Email)) return BadRequest("User with that email adress already exist");
      var user = _mapper.Map<User>(registerDto);

      var result = await _userManager.CreateAsync(user, registerDto.Password);
      if (!result.Succeeded) return BadRequest(result.Errors);
      return new UserDto
      {
        Token = await _tokenProvider.GenerateJWT(user),
        Username = user.UserName
      };

    }
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login([FromBody] LoginDto loginDto)
    {
      var user = await _userManager.Users.FirstOrDefaultAsync(x => x.NormalizedEmail == loginDto.Email.ToUpper());
      if (user == null) return Unauthorized("Invalid email adress");

      var result = await _userManager.CheckPasswordAsync(user, loginDto.Password);
      if (!result) return Unauthorized("Password is invalid");
      return new UserDto
      {
        Username = user.UserName,
        Token = await _tokenProvider.GenerateJWT(user)
      };
    }


    private async Task<bool> UserExists(string email)
    {
      return await _userManager.Users.AnyAsync(x => x.Email == email);
    }

  }
}