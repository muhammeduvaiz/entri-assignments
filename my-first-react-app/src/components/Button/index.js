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
          <button className='btn btn-primary'
        >Click Me 2</button>
      </div>
    )
  }
  
