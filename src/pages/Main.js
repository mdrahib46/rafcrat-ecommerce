import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { routes } from "../routes/routes";

TopBarProgress.config({
  barColors: {
    0: "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
});

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes("*"));

  return (
    <div>
      <Header />
      <Suspense fallback={<TopBarProgress />}>
        <Routes>
          {publicRoutes.map((route, key) => (
            <Route key={key} path={route.path} element={<route.element />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default Main;
