import prodectjson from '../prodect.json'

const Card = ({ onAddToCart, searchTerm }) => {
    const allProdects = prodectjson.prodects
    
    
    const prodects = allProdects.filter(prodect => 
        prodect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prodect.Description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    const handleAddToCart = (prodect) => {
      onAddToCart(prodect)
      alert("Product added to cart")
      console.log("prodect", prodect)
    }
    return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '20px', padding: '20px', flexWrap: 'wrap' }}>
        {prodects.length === 0 ? (
            <div style={{ textAlign: 'center', width: '100%', padding: '40px' }}>
                <h3>No products found</h3>
                <p>Try searching with different keywords</p>
            </div>
        ) : (
            prodects.map((prodect) =>(
                       <div key={prodect.id} className="card" style={{width: '18rem'}}>
                       <img src={prodect.ProdectImage} className="card-img-top" alt={prodect.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                       <div className ="card-body">
                         <h5 className="card-title">{prodect.name}</h5>
                         <p className="card-text">{prodect.Description}</p>
                         <h5>Rs.{prodect.price}</h5>
                        
                        <button className="btn btn-primary" onClick={() => handleAddToCart(prodect)} style={{ marginLeft: '10px' }}>Add to Cart</button>
                         </div>
    </div>
            ))
        )}
  
  
    </div>
  )
}

export default Card