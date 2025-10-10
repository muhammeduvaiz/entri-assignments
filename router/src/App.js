import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Layout from './Components/Layout';
import UserDetails, { userLoader } from './Components/UserDetails';
import Counter from './Components/Counter';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:userId",
        element: <UserDetails/>,
        loader: userLoader
      },
      {
        path: "/counter",
        element: <Counter />,
      }
     ])
function App() {
  return (
  <RouterProvider router={router} />
    // <>
    //   {/* <Router>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //       </Route>
    //     </Routes>
    //   </Router> */}
    
     
    // </>
  )
}

export default App;
