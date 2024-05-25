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
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getEmployees = async () => {
    try {
      var response = await Axios.get(API_URL + "Employee");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCustomer = async () => {
    try {
      var response = await Axios.get(API_URL + "Customer/GetCustomer");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCars = async () => {
    try {
      var response = await Axios.get(API_URL + "Car/GetCar");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };
  const value = { getSalesInvoice, getEmployees, getCustomer, getCars };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
