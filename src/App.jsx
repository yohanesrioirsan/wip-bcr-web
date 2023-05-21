import Home from "./pages/Home";
import CarSearch from "./pages/CarSearch";
import CarDetail from "./pages/CarDetail";
import {RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />

    },

    {
      path: "/search",
      element: <CarSearch />

    },
    {
      path: "/detail/:carId/:carBrand",
      element: <CarDetail />

    }
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
