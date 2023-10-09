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
            CreateMap<EditMovieDto, Movie>();
            CreateMap<Movie, MovieDetailsDto>()
            .ForMember(x => x.Projections, opt => opt.MapFrom(src => src.Projections.ToList()))
            .ForMember(x => x.CoverPhoto, opt => opt.MapFrom(src => src.CoverPhoto));
            CreateMap<Projection, ProjectionDto>()
                .ForMember(x => x.Movie, opt => opt.MapFrom(src => src.Movie))
                .ForMember(x => x.Hall, opt => opt.MapFrom(src => src.Hall));
            CreateMap<Projection, ProjectionDetailsDto>()
                .ForMember(x => x.Seats, opt => opt.MapFrom(src => src.Seats.ToList()));
            CreateMap<Reservation, ReservationDto>()
                .ForMember(x => x.Seats, opt => opt.MapFrom(src => src.Seats.Select(x => x.Number).ToArray()))
                .ForMember(x => x.UserName, opt => opt.MapFrom(src => src.User.UserName))
                .ForMember(x => x.MovieName, opt => opt.MapFrom(src => src.Projection.Movie.Name))
                .ForMember(x => x.ShowingTime, opt => opt.MapFrom(src => src.Projection.ShowingTime));
            CreateMap<Hall, HallDto>()
                .ForMember(x => x.NumberOfProjections, opt => opt.MapFrom(x => x.Projections.Count()));


        }
    }
}