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
          path: "/employee",
          element: <Employee />,
        },
        {
          path: "/customer",
          element: <Customer />,
        },
        {
          path: "/cars",
          element: <Car />,
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
