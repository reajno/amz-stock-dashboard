import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Metrics from "./pages/Metrics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/metrics", element: <Metrics /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
