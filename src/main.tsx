import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Blogs from "./Blog";
import BlogById from "./Blog/[id]";
import Dashboard from "./Layout/Admin/Dashboard";
import Login from "./Layout/Admin/Login";
import EditBlog from "./Layout/Admin/Blog/edit/[id]";
import AddBlog from "./Layout/Admin/Blog/addblog";
import Header from "./Layout/Header";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blog/:id",
    element: <BlogById />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/admin/blog/edit/:id",
    element: (
      <>
        <EditBlog />
      </>
    ),
  },
  {
    path: "/blog/add",
    element: <AddBlog />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
