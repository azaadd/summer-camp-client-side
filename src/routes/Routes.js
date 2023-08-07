import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/MyCart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddItem from "../pages/dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import UserHome from "../pages/dashboard/UserHome/UserHome";
import ManageBooking from "../pages/dashboard/manageBooking/ManageBooking";
import Payment from "../pages/dashboard/payment/Payment";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        
        {
          path: 'all_users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'add_items',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manage_items',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'admin_home',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'manage_booking',
          element: <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
        },
        {
          path: 'user_home',
          element: <UserHome></UserHome>
        },
        {
          path: 'pay_history',
          element: <Payment></Payment>
        },
        {
          path: 'my_cart',
          element: <MyCart></MyCart>
        },
      ]
    }
  ]);