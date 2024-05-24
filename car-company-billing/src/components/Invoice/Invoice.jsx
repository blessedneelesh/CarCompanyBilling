import { useEffect, useState } from "react";
import { useData } from "../../provider/DataProvider";

const Invoice = () => {
  const [invoices, setInvoices] = useState("");

  const { getSalesInvoice } = useData();

  const getInvoice = () => {
    let lst = getSalesInvoice();
    setInvoices(lst);
    console.log(invoices, "invoices");
  };
  useEffect(() => getInvoice(), []);
  return <> yolo </>;
};

export default Invoice;
