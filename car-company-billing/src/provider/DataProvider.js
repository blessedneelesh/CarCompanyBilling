import Axios from "axios";
import React, { useContext } from "react";

const DataContext = React.createContext();
const API_URL = "https://localhost:7228/api/";
export const useData = () => {
  return useContext(DataContext);
};

export default function DataProvider({ children }) {
  const getSalesInvoice = async () => {
    try {
      var response = await Axios.get(API_URL + "SalesInvoice");
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const value = { getSalesInvoice };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
