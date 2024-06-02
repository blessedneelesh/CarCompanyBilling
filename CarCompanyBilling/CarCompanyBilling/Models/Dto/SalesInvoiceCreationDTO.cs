using System.ComponentModel.DataAnnotations;

namespace CarCompanyBilling.Models.Dto
{
    public class SalesInvoiceCreationDTO
    {
        public DateTime date { get; set; }
        public decimal price { get; set; }
        public decimal on_road_price { get; set; }
        public decimal car_id { get; set; }
        public int customer_id { get; set; }
        public decimal salesperson_id { get; set; }
        public string vin_number { get; set; }
    }
}
