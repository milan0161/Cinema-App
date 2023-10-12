

namespace API.DTOs
{
    public sealed record PaginationResponse<T>(int TotalCount, int TotalPages, T Data);

}