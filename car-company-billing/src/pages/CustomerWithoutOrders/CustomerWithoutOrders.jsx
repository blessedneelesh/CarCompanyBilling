import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";
import { Spinner } from "../../components";

const CustomerWithoutOrders = () => {
  const [customerWithoutOrders, setCustomerWithoutOrders] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCustomerWithoutOrders } = useData();

  const CustomerOrdersWithOrders = async () => {
    setIsLoading(true);
    var lst = await getCustomerWithoutOrders();
    setCustomerWithoutOrders(lst);
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
      key: "customerFullName",
      render: (rec) => <>{rec.firstName + " " + rec.lastName}</>,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Zip",
      dataIndex: "zip",
      key: "zip",
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
              Customer WITHOUT Orders Table
            </div>
            <div style={{ padding: "10px" }}>
              <Table dataSource={customerWithoutOrders} columns={columns} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomerWithoutOrders;
