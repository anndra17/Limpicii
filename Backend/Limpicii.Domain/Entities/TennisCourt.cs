using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Limpicii.Domain.Entities
{
    public class TennisCourt
    {
        public long TennisCourtId { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;

        public ICollection<Rental> Rentals { get; set; } = new List<Rental>();
    }
}
