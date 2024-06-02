namespace CarCompanyBilling.Models.Dto
{
    public class SalesInvoiceDTO
    {
        public int invoice_id { get;set; }
        public string date { get; set; }
        public decimal price { get; set; }
        public decimal on_road_price { get; set; }
        public decimal car_id { get; set; }
        public string make { get;set; }             //added for invoice pdf where we need make
        public string model { get; set; }           // model
        public int customer_id { get; set; }        //customer name
        public string customer_name { get;set; }
        public decimal salesperson_id { get; set; }  
        public string salesperson_name { get; set; }  //salesperson name
        public string vin_number { get; set; }
    }
}
