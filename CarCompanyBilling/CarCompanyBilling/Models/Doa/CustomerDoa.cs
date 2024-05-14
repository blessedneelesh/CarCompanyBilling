using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Dto;

namespace CarCompanyBilling.Models.Doa
{
    public class CustomerDoa
    {
        private readonly CarCompanyBillingContext _billingContext;
        public CustomerDoa(CarCompanyBillingContext billingContext)
        {
            _billingContext = billingContext;
        }
       
        public List<CustomerDTO> GetAllCustomer()
        {
            var CustomerLst = _billingContext.Customers.Select(n => new CustomerDTO
            {
                    CustomerId=n.CustomerId,
                    FirstName =n.FirstName,
                    LastName =n.LastName,
                    PhoneNumber =n.PhoneNumber,
                    Address =n.Address,
                    Zip =n.Zip,
            }).ToList();

            return CustomerLst;
        }
/*        var query = _billingContext.Cars
    .Join(_billingContext.Inventories, c => c.CarId, i => i.CarId, (c, i) => new { Car = c, Inventory = i })
    .Join(_billingContext.Warehouses, ci => ci.Inventory.WarehouseId, w => w.WarehouseId, (ci, w) => new { Car = ci.Car, Inventory = ci.Inventory, Warehouse = w })
    .Select(ciw => new CarInventoryDTO { CarId = ciw.Car.CarId, Make = ciw.Car.Make, Model = ciw.Car.Model, CarForSale = ciw.Car.CarForSale, WarehouseName = ciw.Warehouse.WarehouseName, Location = ciw.Warehouse.Location })
    .ToList();*/

        public List<CustomerOrdersWithProductsDTO> GetAllCustomerOrdersWithProducts()
        {
            var query = _billingContext.Customers
                 .Join(_billingContext.SalesInvoices, c => c.CustomerId, s => s.CustomerId, (c, s) => new { Customer = c, SalesInvoice = s })
                 .Join(_billingContext.Cars, cs => cs.SalesInvoice.CarId, car => car.CarId, (cs, car) => new { Customer = cs.Customer, SalesInvoice = cs.SalesInvoice, Car = car })
                 .Select(cscar => new CustomerOrdersWithProductsDTO
                 {
                     CustomerId = cscar.Customer.CustomerId,
                     CustomerFullName = cscar.Customer.FirstName + " " + cscar.Customer.LastName,
                     CarId = cscar.Car.CarId,
                     Make = cscar.Car.Make,
                     Model = cscar.Car.Model,
                     OrderNum = cscar.SalesInvoice.InvoiceId
                 }).ToList();

            return query;
        }

        public List<CustomerDTO> GetAllCustomerWithoutOrders()
        {
            var query = _billingContext.Customers
                 .Where(c => !_billingContext.SalesInvoices.Select(si => si.CustomerId).Contains(c.CustomerId))
                 .Select(n => new CustomerDTO {
                     CustomerId = n.CustomerId,
                     FirstName = n.FirstName,
                     LastName = n.LastName,
                     PhoneNumber = n.PhoneNumber,
                     Address = n.Address,
                     Zip = n.Zip,
                 }).ToList();

            return query;
        }
        
    }
}
