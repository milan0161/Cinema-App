


using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser<int>
    {
        public DateTime CreatedAt { get; set; }

        public ICollection<UserRole> UserRoles { get; set; }
    }
}




