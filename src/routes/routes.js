import { lazy } from "react";

// public routes
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Product = lazy(() => import("../pages/Product"));

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
];
