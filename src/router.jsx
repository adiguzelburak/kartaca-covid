import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

export const MyRouter = {
  HOME: "/",
  detail: (country) => `/${country}`,
};

export default createBrowserRouter([
  {
    path: MyRouter.HOME,
    element: <Home />,
  },
  {
    path: "/:country",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
