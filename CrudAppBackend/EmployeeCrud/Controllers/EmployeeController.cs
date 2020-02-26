using System.Collections.Generic;
using EmployeeCrud.Models;
using Microsoft.AspNetCore.Mvc;
namespace EmployeeCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetEmployees()
        {
            var employees = new List<Employee>()
            {

                    new Employee () {Id = 1, Name ="Rakib"},
                    new Employee () {Id = 2, Name = "Akib"}
            };

            return Ok(employees);
        }

        [HttpPost]
        public IActionResult Save([FromBody] Employee employee)
        {
            return Ok("Saved");
        }
    }
}