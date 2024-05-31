import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";
import { Spinner } from "../../components";

const CustomerWithOrders = () => {
  const [customerWithOrders, setCustomerWithOrders] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCustomerOrdersWithOrders } = useData();

  const CustomerOrdersWithOrders = async () => {
    setIsLoading(true);
    var lst = await getCustomerOrdersWithOrders();
    setCustomerWithOrders(lst);
    setIsLoading(false);
    console.log(lst, "invoices", lst);
  };

  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Customer Name",
      dataIndex: "customerFullName",
      key: "customerFullName",
    },
    {
      title: "Invoice Num",
      dataIndex: "orderNum",
      key: "orderNum",
    },
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
  ];
  useEffect(() => {
    CustomerOrdersWithOrders();
  }, []);
  return (
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Customer Orders Table
            </div>
            <div style={{ padding: "10px" }}>
              <Table dataSource={customerWithOrders} columns={columns} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomerWithOrders;
