import React, { useEffect, useState } from 'react'


const Cart = ({cart, onUpdateCart}) => {
  console.log("cart", cart)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0))
    console.log("total", total)
  }, [cart])

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    )
    onUpdateCart(updatedCart)
  }

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
        : item
    )
    onUpdateCart(updatedCart)
  }

  const removeItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId)
    onUpdateCart(updatedCart)
  }
  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Cart</h1>
        <p>Your cart is empty</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px' }}>
        <h1>Cart</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {cart.map((item) => (
              <div key={item.id} className="card" style={{width: '18rem'}}>
                  <img src={item.ProdectImage} className="card-img-top" alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.Description}</p>
                    <p className="card-text">Rs. {item.price}</p>
                    
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span>Quantity:</span>
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-sm btn-outline-secondary" 
                          onClick={() => decreaseQuantity(item.id)}
                          style={{ marginRight: '5px' }}
                        >
                          -
                        </button>
                        <span style={{ margin: '0 10px', minWidth: '20px', textAlign: 'center' }}>
                          {item.quantity || 1}
                        </span>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => increaseQuantity(item.id)}
                          style={{ marginLeft: '5px' }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">Total: Rs. {item.price * (item.quantity || 1)}</span>
                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
              </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Total: Rs. {total}</h2>
        </div>
    </div>
  )
}

export default Cart