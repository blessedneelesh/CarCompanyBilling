import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";
import { Spinner } from "../../components";

const CarInventory = () => {
  const [inventory, setInventory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCarInventory } = useData();

  const carInventory = async () => {
    setIsLoading(true);
    var lst = await getCarInventory();
    setInventory(lst);
    setIsLoading(false);
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
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Car Inventory Table
            </div>
            <div style={{ padding: "10px" }}>
              <Table dataSource={inventory} columns={columns} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CarInventory;
