

using System.Text.Json.Serialization;

namespace API.Entities
{
    public class CoverPhoto
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        [JsonIgnore]
        public Movie Movie { get; set; }
        public string Photo { get; set; }
    }
}