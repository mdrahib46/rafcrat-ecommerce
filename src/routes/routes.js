// public routes
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OrderComplete from "../pages/OrderComplete";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Shop from "../pages/Shop";

// auth routes
import Account from "../pages/Account";
import ChangePassword from "../pages/ChangePassword";
import ManageAddress from "../pages/ManageAddress";
import MyReviews from "../pages/MyReviews";
import OrderHistory from "../pages/OrderHistory";
import ProfileInfo from "../pages/ProfileInfo";
import Wishlist from "../pages/Wishlist";

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
  // auth routes
  {
    path: "/account",
    role: ["*"],
    children: [
      {
        path: "/",
        element: Account,
      },
      {
        path: "profile-info",
        element: ProfileInfo,
      },
      {
        path: "manage-address",
        element: ManageAddress,
      },
      {
        path: "change-password",
        element: ChangePassword,
      },
      {
        path: "order-history",
        element: OrderHistory,
      },
      {
        path: "reviews",
        element: MyReviews,
      },
      {
        path: "wishlist",
        element: Wishlist,
      },
    ],
  },
  // {
  //   path: "/profile-info",
  //   element: ProfileInfo,
  //   role: ["*"],
  // },
];
