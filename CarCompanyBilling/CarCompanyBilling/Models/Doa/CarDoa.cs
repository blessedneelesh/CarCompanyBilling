using CarCompanyBilling.Models.DataLayer;
using CarCompanyBilling.Models.Dto;


namespace CarCompanyBilling.Models.Doa
{
    public class CarDoa
    {
        private readonly CarCompanyBillingContext _billingContext;
        public CarDoa(CarCompanyBillingContext billingContext)
        {
            _billingContext = billingContext;
        }

        public List<CarDTO> GetAllCar()
        {
            var CarLst = _billingContext.Cars.Select(n => new CarDTO
            {
               CarId=n.CarId,
                Make=n.Make,
                Model=n.Model,
                Color=n.Color,
                Height=n.Height,
                CarForSale=n.CarForSale,
                CarLength=n.CarLength,
                Width=n.Width,
                EngineCc=n.EngineCc,
            }).ToList();

            return CarLst;
        }

        public List<CarDTO> GetAllCarNeverSold()
        {
            /*            IQueryable<decimal> carIdQuery = _billingContext.SalesInvoices.Select(n => n.CarId);
                        var carInSalesInvoice= carIdQuery.ToList();
                        var CarLst=_billingContext.Cars.Where(c=>c.CarId != carIdQuery.ToList()).ToList();*/


            var query = _billingContext.Cars
                .Where(c => !_billingContext.SalesInvoices.Select(si => si.CarId).Contains(c.CarId))
                .Select(n=>new CarDTO
                {
                    CarId = n.CarId,
                    Make = n.Make,
                    Model = n.Model,
                    Color = n.Color,
                    Height = n.Height,
                    CarForSale = n.CarForSale,
                    CarLength = n.CarLength,
                    Width = n.Width,
                    EngineCc = n.EngineCc,
                })
                .ToList();

            return query;
        }

        public List<CarInventoryDTO> GetAllCarInventory()
        {
            var query = _billingContext.Cars
     .Join(_billingContext.Inventories, c => c.CarId, i => i.CarId, (c, i) => new { Car = c, Inventory = i })
     .Join(_billingContext.Warehouses, ci => ci.Inventory.WarehouseId, w => w.WarehouseId, (ci, w) => new { Car = ci.Car, Inventory = ci.Inventory, Warehouse = w })
     .Select(ciw => new CarInventoryDTO { CarId = ciw.Car.CarId, Make = ciw.Car.Make, Model = ciw.Car.Model, CarForSale = ciw.Car.CarForSale, WarehouseName = ciw.Warehouse.WarehouseName, Location = ciw.Warehouse.Location })
     .ToList();

            return query;
        }

        public CarDTO getCarById(int carId)
        {
            return _billingContext.Cars.Where(c => c.CarId == carId).Select(n => new CarDTO
            {
                CarId = n.CarId,
                Make = n.Make,
                Model = n.Model,
                Color = n.Color,
                Height = n.Height,
                CarForSale = n.CarForSale,
                CarLength = n.CarLength,
                Width = n.Width,
                EngineCc = n.EngineCc,
            }).FirstOrDefault();
        }
    }
}
