using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeDataController : ControllerBase
    {
        private readonly EmployeeDataService _service;

        public EmployeeDataController(EmployeeDataService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetData()
        {
            try
            {
                var data = await _service.GetEmployeeDataAsync();
                if (data.Count == 0)
                {
                    return NotFound("No employee data found.");
                }
                return Ok(data);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error occurred: {ex.Message}");
                return StatusCode(500, "Internal server error. Please try again later.");
            }
        }
    }
}