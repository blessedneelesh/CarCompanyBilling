import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";
import { Spinner } from "../../components";

const Car = () => {
  const [cars, setCars] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCars } = useData();
  const getCar = async () => {
    var lst = await getCars();
    setCars(lst);
    console.log(lst, "invoices", lst);
  };

  const columns = [
    {
      title: "Car Id",
      dataIndex: "carId",
      key: "carId",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Make",
      dataIndex: "make",
      key: "make",
    },

    {
      title: "Color",
      key: "color",
      dataIndex: "color",
    },
    {
      title: "Engine CC",
      dataIndex: "engineCc",
      key: "engineCc",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Width",
      dataIndex: "width",
      key: "width",
    },
    {
      title: "Car For Sale",
      dataIndex: "carForSale",
      key: "carForSale",
    },
    {
      title: "Car Length",
      dataIndex: "carLength",
      key: "carLength",
    },
  ];

  const createArr = () => {
    cars &&
      console.log(
        cars.map((e) =>
          Object.keys(e).forEach((key) => {
            return {
              value: key.carId,
              label: key.make,
            };
          })
        )
      );
  };

  useEffect(() => {
    getCar();
    createArr();
  }, []);
  return (
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>Car Table</div>
            <div style={{ marginTop: "10px" }}>
              <Table dataSource={cars} columns={columns} loading={isLoading} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Car;
