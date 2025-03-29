import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Card from './components/Header/Card';
import prodectImage from '../src/components/Header/image/image.jpg';
function App() {
  const prodects = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      image: 'https://fastly.picsum.photos/id/612/200/200.jpg?hmac=HbIkwJ0QBqhSlGTi3bnF4JFTp9BntF-teQZUQhpqWyM'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.99,
      image: 'https://fastly.picsum.photos/id/612/200/200.jpg?hmac=HbIkwJ0QBqhSlGTi3bnF4JFTp9BntF-teQZUQhpqWyM'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.99,
      image: 'https://fastly.picsum.photos/id/612/200/200.jpg?hmac=HbIkwJ0QBqhSlGTi3bnF4JFTp9BntF-teQZUQhpqWyM'
    }
  ]
  return (
    <>
    <div className="App">
     <Header/>
    </div>
    <div>
      {prodects.map((prodect) => (
        // <Card
        <Card
          key={prodect.id}
          prodectName={prodect.name}
          price={prodect.price}
          image={prodect.image}
        />
        
      ))}
      {/* <Card
      prodectName={"Moutain"}
      price={1200}
      image={prodectImage}
      /> */}
    </div>
    <div>


    </div>
    </>
  );
}

export default App;
