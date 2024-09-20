import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./components/Layout";
import Page404 from "./pages/Page404";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: Router,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
