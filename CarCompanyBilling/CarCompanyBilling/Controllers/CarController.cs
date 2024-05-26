using CarCompanyBilling.Models.Doa;
using CarCompanyBilling.Models.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarCompanyBilling.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly CarDoa _carDoa;
        public CarController(CarDoa carDoa)
        {
            _carDoa = carDoa;
        }

        [HttpGet]
        public ActionResult<List<CarDTO>> GetCar() //ActionResult gives flexibility to return NotFound()
        {
            var car = _carDoa.GetAllCar();
            return Ok(car);
        }

        [HttpGet]
        public ActionResult<List<CarDTO>> GetCarNeverSold() //ActionResult gives flexibility to return NotFound()
        {
            var car = _carDoa.GetAllCarNeverSold();
            return Ok(car);
        }

        [HttpGet]
        public ActionResult<List<CarInventoryDTO>> GetCarInventory() //ActionResult gives flexibility to return NotFound()
        {
            var car = _carDoa.GetAllCarInventory();
            return Ok(car);
        }

        [HttpGet]
        public ActionResult<CustomerDTO> GetCarById([FromQuery] int carId)
        {
            var car = _carDoa.getCarById(carId);
            if (car == null)
            {
                return NotFound();
            }
            return Ok(car);
        }

    }
}
