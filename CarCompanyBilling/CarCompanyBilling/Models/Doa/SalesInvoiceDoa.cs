using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarCompanyBilling.Models.Doa
{
    public class SalesInvoiceDoa
    {
        private readonly CarCompanyBillingContext _billingContext;

        public SalesInvoiceDoa() {
            _billingContext= new CarCompanyBillingContext();
        }

        public List<SalesInvoiceDTO> GetAllSalesInvoice()
        {
            var salesInvoiceLst = _billingContext.SalesInvoices.Select(n => new SalesInvoiceDTO
            {
                invoice_id = n.InvoiceId,
                date = n.Date,
                price = n.Price,
                on_road_price = n.OnRoadPrice,
                car_id = n.CarId,
                customer_id = n.CustomerId,
                salesperson_id = n.SalespersonId,
                vin_number = n.VinNumber

            }).ToList();

            return salesInvoiceLst;
        }
    }
}
