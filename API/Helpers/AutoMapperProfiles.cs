using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserDto>();
            CreateMap<RegisterDto, User>();
            CreateMap<Movie, MovieDto>();
            CreateMap<Movie, MovieDetailsDto>()
            .ForMember(x => x.Projections, opt => opt.MapFrom(src => src.Projections.ToList()))
            .ForMember(x => x.CoverPhoto, opt => opt.MapFrom(src => src.CoverPhoto));
            CreateMap<Projection, ProjectionDto>()
                .ForMember(x => x.Movie, opt => opt.MapFrom(src => src.Movie))
                .ForMember(x => x.Hall, opt => opt.MapFrom(src => src.Hall));

        }
    }
}