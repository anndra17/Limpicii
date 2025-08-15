using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limpicii.Domain.Entities
{
    public class User
    {
        public long UserId { get; set; }
        public string Email { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }   
        public DateTime? DeletedAt { get; set; }

        public long RoleId { get; set; }
        public Role Role { get; set; } = null!;

        public ICollection<Rental> Rentals { get; set; } = new List<Rental>();
    }
}
