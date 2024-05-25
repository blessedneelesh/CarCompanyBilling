namespace CarCompanyBilling.Models.Dto
{
    public class SalesInvoiceDTO
    {
        public int invoice_id { get;set; }
        public string date { get; set; }
        public decimal price { get; set; }
        public decimal on_road_price { get; set; }
        public decimal car_id { get; set; }
        public int customer_id { get; set; }
        public decimal salesperson_id { get; set; }
        public string vin_number { get; set; }
    }
}
