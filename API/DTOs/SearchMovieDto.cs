namespace API.DTOs
{
    public sealed record SearchMovieDto(string SearchTerm, int PageSize, int PageNumber);

}