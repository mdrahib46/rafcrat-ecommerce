import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { routes } from "../routes/routes";

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes("*"));

  return (
    <div>
      <Header />
      <Routes>
        {publicRoutes.map((route, key) => (
          <Route key={key} path={route.path}>
            {route.children ? (
              route.children.map((subRoute, i) =>
                subRoute.path === "/" ? (
                  <Route key={i} index={true} element={<subRoute.element />} />
                ) : (
                  <Route
                    key={i}
                    index={false}
                    path={subRoute.path}
                    element={<subRoute.element />}
                  />
                )
              )
            ) : (
              <Route path={route.path} element={<route.element />} />
            )}
          </Route>
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
