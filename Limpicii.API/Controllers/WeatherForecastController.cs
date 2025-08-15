using Limpicii.Infrastructure.Context;
using Microsoft.AspNetCore.Mvc;

namespace Limpicii.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly LimpiciiDbContext _context;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, LimpiciiDbContext limpiciiDbContext)
        {
            _logger = logger;
            _context = limpiciiDbContext;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IActionResult Get()
        {
            var model = _context.TennisCourts.ToList();
            return Ok(model);
        }
    }
}
