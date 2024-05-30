import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "../components";
import {
  Car,
  CarInventory,
  CarNotSold,
  Customer,
  CustomerTop,
  CustomerWithOrders,
  CustomerWithoutOrders,
  Employee,
  Invoice,
  InvoiceInsert,
  SingleCar,
  SingleCustomer,
  SingleEmployee,
} from "../pages";

const Routes = () => {
  const routesForPublic = [
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Invoice />,
        },
        {
          path: "/invoice",
          element: <Invoice />,
        },
        {
          path: "/invoice/create",
          element: <InvoiceInsert />,
        },
        {
          path: "/employee",
          element: <Employee />,
        },
        {
          path: "/employee/:employeeId",
          element: <SingleEmployee />,
        },

        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/customer/:custId",
          element: <SingleCustomer />,
        },
        {
          path: "/cars",
          element: <Car />,
        },
        {
          path: "/car/:carId",
          element: <SingleCar />,
        },
        {
          path: "/car-not-sold",
          element: <CarNotSold />,
        },

        {
          path: "/car-inventory",
          element: <CarInventory />,
        },
        {
          path: "/customer-orders",
          element: <CustomerWithOrders />,
        },
        {
          path: "/customer-without-order",
          element: <CustomerWithoutOrders />,
        },
        {
          path: "/top-customer",
          element: <CustomerTop />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routesForPublic]);

  function NavbarWrapper() {
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default Routes;
