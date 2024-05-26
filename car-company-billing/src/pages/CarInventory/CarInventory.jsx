import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";

const CarInventory = () => {
  const [inventory, setInventory] = useState("");

  const { getCarInventory } = useData();

  const carInventory = async () => {
    var lst = await getCarInventory();
    setInventory(lst);
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
      title: "Warehouse Name",
      key: "warehouseName",
      dataIndex: "warehouseName",
    },
    {
      title: "Warehouse Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Car For Sale",
      dataIndex: "carForSale",
      key: "carForSale",
    },
  ];
  useEffect(() => {
    carInventory();
  }, []);
  return (
    <> {inventory && <Table dataSource={inventory} columns={columns} />}</>
  );
};

export default CarInventory;
