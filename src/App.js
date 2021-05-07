import React, {useState} from 'react';
import './App.css';
import Header from './componets/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from 'react-bootstrap'
import style from './app.module.css'
import Product from './componets/Product';
import List from './componets/List';

function App() {

  const [productItem, setProductItem] =  useState([]);

  const getProduct = (product) =>{
    const exist = productItem.find((x) => x.id === product.id);
    if (exist) {
      setProductItem(
        productItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setProductItem([...productItem, { ...product, qty: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const exist = productItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setProductItem(productItem.filter((x) => x.id !== product.id));
    } else {
      setProductItem(
        productItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="App">
     <Header/>
      <Row className={style.shopContainer}>
        <Col className={style.prodContainer}><Product getProduct={getProduct}/></Col>
        <Col className={style.listContainer}><List product={productItem ? productItem : null} getProduct={getProduct} removeProduct={removeProduct} /></Col>
      </Row>
    </div>
  );
}

export default App;
