
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import Layout from "./Components/Layout";
import Page404 from "./Pages/Page404";
function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: <Router />,
    },
  ]);
  return <RouterProvider Router={Router} />;
}

export default App;