import { lazy } from "react";

// public routes
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const OrderComplete = lazy(() => import("../pages/OrderComplete"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const routes = [
  {
    path: "/",
    element: Home,
    role: ["*"],
  },
  {
    path: "/shop",
    element: Shop,
    role: ["*"],
  },
  {
    path: "/:productSlug",
    element: Product,
    role: ["*"],
  },
  {
    path: "/cart",
    element: Cart,
    role: ["*"],
  },
  {
    path: "/checkout",
    element: Checkout,
    role: ["*"],
  },
  {
    path: "/order-complete",
    element: OrderComplete,
    role: ["*"],
  },
  {
    path: "/login",
    element: Login,
    role: ["*"],
  },
  {
    path: "/register",
    element: Register,
    role: ["*"],
  },
];
