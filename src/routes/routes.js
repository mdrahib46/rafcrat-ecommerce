import { lazy } from "react";

// public routes
const Home = lazy(() => import("../pages/Home"));

export const routes = [
  {
    path: "/",
    element: Home,
    role: ["*"],
  },
];
