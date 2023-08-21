
using API.Data;
using API.Interfaces;
using API.Repositories;
using Microsoft.EntityFrameworkCore;

namespace API.Helpers
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
});

            services.AddCors();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
            services.AddScoped<ITokenProvider, TokenProvider>();
            services.AddScoped<IMovieRepository, MovieRepository>();
            return services;
        }
    }
}