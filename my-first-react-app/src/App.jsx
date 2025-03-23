import React from 'react'
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import { Button, Button2 } from './components/Button';
import NotAuther from './components/NotAuther';
const App = () => {

  const user = "uvaiz"

  function bbclick() {
    console.log('Button Clickedbb')
  }
  return (

    <>
      {
        user === "uvaiz" ? (

          <>
            <div className="App" style={{
              backgroundColor: "lightblue",
              color: "darkblue",
              padding: "20px",
              margin: "20px",
              border: "1px solid darkblue",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>


              <h1 className="heading1" style={{ textDecoration: "underline" }}>Hello World</h1>
              <h1 style={{ cursor: "pointer" }}>Hello world</h1>
            </div>
            <div className='banner'>
              <Banner />
              <Button label={"Click m"}
                handleButtonClick={bbclick} />
            </div>
            <div>
              <About />
            </div>
            <div style={{
              backgroundColor: "lightblue",
              margin: "20px",
              border: "1px solid green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              flexDirection: "column",
              gap: "20px"
            }}>

              <Button2 />
            </div>
          </>
        ) : (

          <NotAuther username={user} />)



      }


    </>
  );
}

export default App;

