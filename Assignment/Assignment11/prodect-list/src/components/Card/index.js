import React from 'react'

const Card = ({ prodectName, image, price, cat }) => {
  const handleAddToCart = () => { alert('Product added to cart!'); }

  return (

    <div style={{
      width: '18rem',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      

    }}>
      <img
        src={image}
        className="card-img-top"
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          {prodectName}
          <br></br>
          {cat}
        </p>
        <a href="#" className="btn btn-primary">Rs. {price}</a>
        <div>
          <button className="btn btn-primary" onClick={handleAddToCart} style={{ marginLeft: '10px' }}>Add to Cart</button>
          <button className="btn btn-primary" onClick={() => alert("Are you sure")} style={{ marginLeft: '10px' }}>Buy Now</button>
        </div>
      </div>
    </div>

  )
}

export default Card