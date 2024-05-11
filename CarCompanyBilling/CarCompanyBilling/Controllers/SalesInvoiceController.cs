using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
            System.Diagnostics.Debug.WriteLine(_salesInvoiceDoa + " NEE");
            var salesInvoice = _salesInvoiceDoa.GetAllSalesInvoice();

            return salesInvoice;
        }

    }
}
