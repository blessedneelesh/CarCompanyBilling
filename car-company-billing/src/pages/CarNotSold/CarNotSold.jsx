import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";
import { Spinner } from "../../components";

const CarNotSold = () => {
  const [carNotSold, setCarNotSold] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCarNotSold } = useData();

  const CarNotSold = async () => {
    setIsLoading(true);
    var lst = await getCarNotSold();
    setCarNotSold(lst);
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
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Car NOT Sold Table
            </div>

            <div style={{ padding: "10px" }}>
              <Table dataSource={carNotSold} columns={columns} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CarNotSold;
