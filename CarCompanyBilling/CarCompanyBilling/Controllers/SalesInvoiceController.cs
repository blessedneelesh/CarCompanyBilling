using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace CarCompanyBilling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesInvoiceController : ControllerBase
    {
        private readonly SalesInvoiceDoa _salesInvoiceDoa;
        public SalesInvoiceController(SalesInvoiceDoa salesInvoiceDoa)
        {
            _salesInvoiceDoa = salesInvoiceDoa;
        }

        [HttpGet]
        public ActionResult<List<SalesInvoiceDTO>> GetSalesInvoice() //ActionResult gives flexibility to return NotFound()
        {
            var salesInvoice = _salesInvoiceDoa.GetAllSalesInvoice();

            return salesInvoice;
        }

        [HttpPost]
        public ActionResult<SalesInvoice> PostSalesInvoice(SalesInvoice value)
        {
            try
            {
                _salesInvoiceDoa.CreateSalesInvoice(value);
                return CreatedAtAction(nameof(GetSalesInvoice), new { invoiceId = value.InvoiceId }, value);
            }
            catch (DbUpdateException ex)
            {
                var sqlException = ex.GetBaseException() as SqlException;
                if (sqlException.Number == 547)
                {
                    Console.WriteLine("FK constraint");
                    return BadRequest("Foreign key violations!");
                }
                return BadRequest("Some errors!");
            }
        }

    }
}
