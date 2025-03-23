import React from 'react'
import { Button } from '../Button'

const Banner = () => {
    function bclick(){
        console.log('Button Clicked')
      
    }
    return (
        <div>
            <div style={{
                backgroundColor: "lightblue",
                color: "darkblue",
                padding: "20px",
                margin: "20px",
                border: "1px solid darkblue",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1>Banner Component</h1>
                <div style={
                    {
                        backgroundColor: "lightblue",
                        color: "darkblue",
                        padding: "20px",
                        margin: "20px",
                        border: "1px solid darkblue",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }><Button label={"Submit"}
                handleButtonClick={bclick}/></div>
            </div>


        </div>
    )
}

export default Banner