using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limpicii.Domain.Entities
{
    public class Role
    {
        public long RoleId { get; set; }
        public string Name { get; set; } = null!; 

        public ICollection<User> Users { get; set; } = new List<User>();
        public ICollection<RolePermission> RolePermissions { get; set; } = new List<RolePermission>();
    }
}
