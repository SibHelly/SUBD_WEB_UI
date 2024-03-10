import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoutes";

import Main from "../Pages/Main/Main";
import Login from "../Pages/Login/Login";
import Logout from "../Pages/Logout/Logout";
import SignIn from "../Pages/SingInForm/SingIn";
import Query from "../Pages/Query/Query";
import Table from "../Pages/Table/Table";
import Admin from "../Pages/Admin/Admin";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        {
          path: "/table",
          element: <Table />,
        },
        {
          path: "/query",
          element: <Query />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
