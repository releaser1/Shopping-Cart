import React, {useState} from 'react';
import './App.css';
import Header from '../src/Components/Header/Header'
import SlideImage from '../src/Components/SlideImage/SlideImage'
import ShopList from '../src/Components/ShopList/ShopList'
import Data from '../src/Components/Data/Data'
import Footer from '../src/Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { products } = Data;  
  const [shopItems, setShopItems] = useState([]);

  const onAdd = (product) => {
    const exist = shopItems.find((x) => x.id === product.id);
    console.log(exist)
    console.log(shopItems)
    
    if (exist) {
      setShopItems(
        shopItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
        );
      } else {
        setShopItems([...shopItems, { ...product, qty: 1 }]);
      }
  };

  const onRemove = (product) => {
    const exist = shopItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setShopItems(shopItems.filter((x) => x.id !== product.id));
    } else {
      setShopItems(
        shopItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };




  return (
    <div>      
      <Header countShopItems={shopItems.length} 
                  shopItems={shopItems}
                  onAdd={onAdd}
                  onRemove={onRemove}                  
      ></Header>
      <SlideImage />
      <ShopList  products={products} onAdd={onAdd} />
      <Footer />
    </div>
  );
}

export default App;
