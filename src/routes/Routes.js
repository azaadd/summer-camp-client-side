import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../pages/dashboard/Dashboard";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);