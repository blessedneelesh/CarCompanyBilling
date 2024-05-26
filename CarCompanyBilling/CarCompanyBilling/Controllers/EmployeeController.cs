using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarCompanyBilling.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDoa _employeeDoa;
        public EmployeeController(EmployeeDoa employeeDoa) {
            _employeeDoa = employeeDoa;
        }

        [HttpGet]
        public ActionResult<List<EmployeeDTO>> GetAllEmployees() //ActionResult gives flexibility to return NotFound()
        {
            var employee = _employeeDoa.GetAllEmployee();

            return Ok(employee);
        }

        [HttpGet]
        public ActionResult<EmployeeDTO> GetEmployeeById([FromQuery] int employeeId)
        {
            var employee = _employeeDoa.getEmployeeById(employeeId);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }
    }
}
