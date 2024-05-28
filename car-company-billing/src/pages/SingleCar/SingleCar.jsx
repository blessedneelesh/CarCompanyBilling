import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";

const SingleCar = () => {
  const [singleCar, setSingleCar] = useState("");

  const { getSingleCar } = useData();

  const { carId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    var lst = await getSingleCar(carId);
    setSingleCar(lst);
    console.log(singleCar, "invoices", lst);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Button type="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        <h3>Car Detail</h3>
        <div>
          Id: {singleCar.carId} <br></br>
          <br></br>
          Make: {singleCar.make} <br></br>
          <br></br>
          Model: {singleCar.model} <br></br>
          <br></br>
          Color: {singleCar.color} <br></br>
          <br></br>
          Engine CC: {singleCar.engineCc} <br></br>
          <br></br>
          Car for Sale: {singleCar.carForSale} <br></br>
          <br></br>
          Height: {singleCar.height} <br></br>
          <br></br>
          Width: {singleCar.width} <br></br>
          <br></br>
          Car Length: {singleCar.carLength} <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default SingleCar;
