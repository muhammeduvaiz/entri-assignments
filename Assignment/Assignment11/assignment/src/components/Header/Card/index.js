import React from 'react';
import prodectImage from '../image/image.jpg';

const Card = ({prodectName, price ,image}) => {
  return (
    <>
    <div style ={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',position: 'fixed', top: '50px', zIndex:'-1', width: '100%'}}>
      <div className="card" style={{ width: '18rem',
        margin: '20px ', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        borderRadius: '10px', 
        overflow: 'hidden'

       }}>
        <img 
          src="https://fastly.picsum.photos/id/612/200/200.jpg?hmac=HbIkwJ0QBqhSlGTi3bnF4JFTp9BntF-teQZUQhpqWyM" 
          className="card-img-top" 
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem',
        margin: '20px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        borderRadius: '10px', 
        overflow: 'hidden'
       }}>
        <img 
          src={prodectImage} 
          className="card-img-top" 
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">{prodectName}</h5>
          <p className="card-text">
            Rs.{price}
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Card;