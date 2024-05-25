import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";

const Car = () => {
  const [cars, setCars] = useState("");

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
  useEffect(() => {
    getCar();
  }, []);
  return <> {cars && <Table dataSource={cars} columns={columns} />}</>;
};

export default Car;
