using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarCompanyBilling.Models.Doa
{
    public class SalesInvoiceDoa
    {
        private readonly CarCompanyBillingContext _billingContext;
        public SalesInvoiceDoa(CarCompanyBillingContext billingContext) {
            _billingContext= billingContext;
        }
        //_billingContext.SalesInvoices is of type IQueryable because DBset<SalesInvoice> implements IQueryable
        //so, '' can use all the public methods of IQueryable interface. like LINQ operator select, where
        // IQueryable + LINQ operator = expression tree.
        // in order to execute expresstion tree
        public List<SalesInvoiceDTO> GetAllSalesInvoice()
        {
            var salesInvoiceLst = _billingContext.SalesInvoices.Select(n => new SalesInvoiceDTO
            {
                invoice_id = n.InvoiceId,
                date = n.Date.ToShortDateString(),
                price = n.Price,
                on_road_price = n.OnRoadPrice,
                car_id = n.CarId,
                customer_id = n.CustomerId,
                salesperson_id = n.SalespersonId,
                vin_number = n.VinNumber

            }).ToList();

            return salesInvoiceLst;
        }

        public void CreateSalesInvoice(SalesInvoice salesInvoice)
        {
            _billingContext.SalesInvoices.Add(salesInvoice);
            _billingContext.SaveChanges();
        }

    }
}
