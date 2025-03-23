import React from 'react'

const NotAuther = ({username}) => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'lightblue',
        color: 'darkblue',
    }}>Not Auther {username}</div>
  )
}

export default NotAuther