namespace CarCompanyBilling.Models.Dto
{
    public class CarInventoryDTO
    {
        public decimal CarId { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string CarForSale { get; set; }
        public string WarehouseName { get; set; }
        public string Location { get; set; }
    }
}
