import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Layout from './components/Layout';
import About from './components/About';
import User from './components/User';
import Home from './components/Home';
import UserDetails, { userLoader } from './components/UserDetails';
import NotFound from './components/404';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
           index: true, 
          element: <Home/> 

        },
         {
            path: "about", 
           element: <About/> 

         },
         { 
           path: "user", 
           element: <User/> 

         },
         {
           path: "user/:Id",
           element: <UserDetails/>,
           loader: userLoader,
           errorElement: <NotFound/>
         },
         {
           path: "*",
           element: <NotFound/>
         },
         
      ],
    },
  ]);
 
  return (

  <>
  <RouterProvider router={router}/>
  
  </>
  
  );
}

export default App;
