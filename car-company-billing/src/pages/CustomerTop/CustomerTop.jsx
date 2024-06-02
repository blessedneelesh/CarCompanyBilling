import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";
import { Table } from "antd";
import { PDFViewer } from "@react-pdf/renderer";
import { PDFFile, Spinner } from "../../components";

const CustomerTop = () => {
  const [topCustomer, setTopCustomer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getTopCustomer } = useData();

  const getTopCustomers = async () => {
    setIsLoading(true);
    var lst = await getTopCustomer();
    setTopCustomer(lst);
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
      dataIndex: "customerName",
      key: "customerName",
    },

    {
      title: "Count",
      dataIndex: "count",
      key: "count",
    },
  ];

  useEffect(() => {
    getTopCustomers();
  }, []);

  return (
    <>
      <div style={{ margin: "5px" }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div style={{ fontWeight: "600", fontSize: "18px" }}>
              Top Customer Table
            </div>
            <div style={{ padding: "10px" }}>
              <Table dataSource={topCustomer} columns={columns} />
            </div>
          </>
        )}
        {/* <PDFViewer>
        <PDFFile />
      </PDFViewer> */}
      </div>
    </>
  );
};

export default CustomerTop;
