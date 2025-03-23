import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button
        onClick={props.handleButtonClick}
        >{props.label}</button>
    </div>
  )
}


export const Button2 = () => {
    return (
      <div >
          <button style={{
            color: 'green',
            backgroundColor: 'lightblue',
            border: '1px solid green',
          }}>Click Me 2</button>
      </div>
    )
  }
  
