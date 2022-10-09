import { lazy } from "react";

// public routes
const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));

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
];
