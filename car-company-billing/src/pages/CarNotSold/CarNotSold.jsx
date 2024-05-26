import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";

const CarNotSold = () => {
  const [carNotSold, setCarNotSold] = useState("");

  const { getCarNotSold } = useData();

  const CarNotSold = async () => {
    var lst = await getCarNotSold();
    setCarNotSold(lst);
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
    CarNotSold();
  }, []);
  return (
    <> {carNotSold && <Table dataSource={carNotSold} columns={columns} />}</>
  );
};

export default CarNotSold;
