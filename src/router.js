import { createBrowserRouter, Outlet } from "react-router-dom";
import Wrapper from "./wrapper";
import Home from "./pages/Home";
import Book from "./pages/book";
import Category from "./pages/category";
import Manage from "./pages/manage";
import CategoryDetail from "./pages/category/detail";

const routers = [
  {
    element: (
      <Wrapper>
        <Outlet />
      </Wrapper>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/manage",
        element: <Manage />,
      },
      {
        path: "/category/:id",
        element: <CategoryDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routers, {
  future: {
    v7_normalizeFormMethod: true,
  },
});
