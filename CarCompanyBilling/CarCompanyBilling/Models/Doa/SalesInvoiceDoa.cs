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

   /*     var salesInvoiceLst = _billingContext.SalesInvoices.Select(n => new SalesInvoiceDTO
        {
            invoice_id = n.InvoiceId,
            date = n.Date.ToShortDateString(),
            price = n.Price,
            on_road_price = n.OnRoadPrice,
            car_id = n.CarId,
            customer_id = n.CustomerId,
            salesperson_id = n.SalespersonId,
            vin_number = n.VinNumber

        }).ToList();*/
        public List<SalesInvoiceDTO> GetAllSalesInvoice()
        {
            var salesInvoiceLst = (from si in _billingContext.SalesInvoices
                                  join c in _billingContext.Cars on si.CarId equals c.CarId
                                  join cust in _billingContext.Customers on si.CustomerId equals cust.CustomerId
                                  join e in _billingContext.Employees on si.SalespersonId equals e.EmployeeId
                                  select new SalesInvoiceDTO
                                  {
                                      invoice_id = si.InvoiceId,
                                      date = si.Date.ToShortDateString(),
                                      price = si.Price,
                                      on_road_price = si.OnRoadPrice,
                                      car_id = si.CarId,
                                      make=c.Make,
                                      model=c.Model,
                                      customer_id = si.CustomerId,
                                      customer_name=cust.FirstName + " " +cust.LastName,
                                      salesperson_id = si.SalespersonId,
                                      salesperson_name=e.FirstName + " " +e.LastName,
                                      vin_number = si.VinNumber
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
