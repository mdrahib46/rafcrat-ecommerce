import { lazy } from "react";

// public routes
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Product = lazy(() => import("../pages/Product"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));

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
];
