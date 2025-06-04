import React from 'react'

function Form() {
    const handleInputSearch = (event) => {
        const searchValue = event.target.value;
        console.log(searchValue);
    }
  return (
    <>
    <div>
        <input type="text" className="form-control" placeholder="Search" aria-label="Search" style={{ width: '300px', margin: '20px' }} 
        onChange={handleInputSearch} />

    </div>
    <div>
        <input type="text" className="form-control" placeholder="Product Name" aria-label="Product Name" style={{ width: '300px', margin: '20px' }} 
        onChange={handleInputSearch} />
    </div>
    </>
  )
}

export default Form