using API.Data;
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
      this._tokenProvider = tokenProvider;
      this._userManager = userManager;
      this._mapper = mapper;

    }
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
      if (await UserExists(registerDto.Email)) return BadRequest("User with that email adress already exist");
      var user = _mapper.Map<User>(registerDto);

      var result = await _userManager.CreateAsync(user, registerDto.Password);
      if (!result.Succeeded) return BadRequest(result.Errors);
      return new UserDto
      {
        Token = _tokenProvider.GenerateJWT(user),
        Username = user.UserName
      };

    }

    private async Task<bool> UserExists(string email)
    {
      return await _userManager.Users.AnyAsync(x => x.Email == email);
    }

  }
}