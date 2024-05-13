using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarCompanyBilling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeDoa _employeeDoa;
        public EmployeeController(EmployeeDoa employeeDoa) {
            _employeeDoa = employeeDoa;
        }

        [HttpGet]
        public ActionResult<List<EmployeeDTO>> GetSalesInvoice() //ActionResult gives flexibility to return NotFound()
        {
            var employee = _employeeDoa.GetAllEmployee();

            return employee;
        }
    }
}
