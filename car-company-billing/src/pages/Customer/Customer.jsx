import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table, Button } from "antd";
import { Spinner } from "../../components";

const Customer = () => {
  const [customer, setCustomer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { getCustomer } = useData();

  const getCustomers = async () => {
    var lst = await getCustomer();
    setCustomer(lst);
    console.log(lst, "invoices", lst);
  };

  const columns = [
    {
      title: "Customer Id",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Name",
      key: "name",
      render: (rec) => (
        <>
          {" "}
          {rec.firstName.charAt(0).toUpperCase() +
            rec.firstName.slice(1) +
            " " +
            rec.lastName.charAt(0).toUpperCase() +
            rec.lastName.slice(1)}
        </>
      ),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Zip",
      dataIndex: "zip",
      key: "zip",
    },
  ];
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Customer Table
            </div>
            <div style={{ marginTop: "10px" }}>
              <Table
                dataSource={customer}
                columns={columns}
                loading={isLoading}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Customer;
