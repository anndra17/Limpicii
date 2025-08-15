using Limpicii.Domain.Enums;


namespace Limpicii.Domain.Entities
{
    public class Rental
    {
        public long RentalId { get; set; } 
        public long TennisCourtId { get; set; }
        public long UserId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public RentalDuration Duration { get; set; }
        public string? Details { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? DeletedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public TennisCourt TennisCourt { get; set; } = null!;
        public User User { get; set; } = null!;
    }
}
