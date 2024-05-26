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

  const getCustomerOrdersWithOrders = async () => {
    try {
      var response = await Axios.get(
        API_URL + "Customer/GetCustomerOrdersWithProducts"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCustomerWithoutOrders = async () => {
    try {
      var response = await Axios.get(
        API_URL + "Customer/GetCustomerWithoutOrders"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getTopCustomer = async () => {
    try {
      var response = await Axios.get(API_URL + "Customer/GetTopCustomers");
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

  const getCarInventory = async () => {
    try {
      var response = await Axios.get(API_URL + "Car/GetCarInventory");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCarNotSold = async () => {
    try {
      var response = await Axios.get(API_URL + "Car/GetCarNeverSold");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    getSalesInvoice,
    getEmployees,
    getCustomer,
    getCustomerOrdersWithOrders,
    getCustomerWithoutOrders,
    getTopCustomer,
    getCars,
    getCarInventory,
    getCarNotSold,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
