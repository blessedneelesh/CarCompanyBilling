import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import { Spinner } from "../../components";

const SingleCar = () => {
  const [singleCar, setSingleCar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getSingleCar } = useData();

  const { carId } = useParams();

  const navigate = useNavigate();

  const getEmployee = async () => {
    setIsLoading(true);
    var lst = await getSingleCar(carId);
    setSingleCar(lst);
    setIsLoading(false);
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
        {isLoading || !singleCar ? (
          <Spinner />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "7px",
              margin: "5px",
            }}
          >
            <div>Id: {singleCar.carId} </div>
            <div>Make: {singleCar.make} </div>
            <div>Model: {singleCar.model} </div>
            <div> Color: {singleCar.color} </div>
            <div>Engine CC: {singleCar.engineCc}</div>
            <div> Car for Sale: {singleCar.carForSale}</div>
            <div> Height: {singleCar.height} </div>
            <div>Width: {singleCar.width}</div>
            <div>Car Length: {singleCar.carLength}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleCar;
