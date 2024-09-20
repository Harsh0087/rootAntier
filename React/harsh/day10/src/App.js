
import './App.css';
import { Home } from './Pages/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import Layout from './Components/Layout'
import Page404 from './Pages/page404'


function App() {
  const  router= createBrowserRouter([
    {
      element:<Layout/>,
      errorElement:<Page404/>,
      children:router  
    }
  ])
  return (
  
      <RouterProvider router= {routes}/>
  );
}

export default App;
