import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Navbar } from "../components";
import { Invoice } from "../pages";

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
          element: <Invoice />,
        },
        {
          path: "/customer",
          element: <Invoice />,
        },
        {
          path: "/cars",
          element: <Invoice />,
        },
        {
          path: "/car-not-sold",
          element: <Invoice />,
        },
        {
          path: "/car-never-sold",
          element: <Invoice />,
        },
        {
          path: "/car-inventory",
          element: <Invoice />,
        },
        {
          path: "/customer-orders",
          element: <Invoice />,
        },
        {
          path: "/customer-without-order",
          element: <Invoice />,
        },
        {
          path: "/top-customer",
          element: <Invoice />,
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
