import React from "react";
import Home from "components/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "layouts";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
