import React from 'react'
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import {Button,Button2} from './components/Button';
const App = () => {
  return (
    <>
    <div className="App" style={{backgroundColor: "lightblue",
      color: "darkblue",
      padding: "20px",
      margin: "20px",
      border: "1px solid darkblue",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"}}>
    

      <h1 className="heading1"style={{textDecoration:"underline"}}>Hello World</h1>
      <h1 style={{cursor:"pointer"}}>Hello world</h1>
      </div>
      <div className='banner'>
         <Banner /> 
         <Button /> 
      </div>
      <div>
        <About />
      </div>
      <div style={{backgroundColor: "lightblue",
      margin: "20px",
      border: "1px solid green",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      flexDirection: "column",
      gap:"20px"
      }}>
        
        <Button2 />
      </div>
      </>
  );
}

export default App;

