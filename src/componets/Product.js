import React, { Component } from 'react'
import {Media,Button} from 'react-bootstrap'
import style from './componet.module.css'
import { products } from '../app/util/constant'


class Product extends Component{
    constructor(props) {
        super(props)
    
        this.state={
            product:{},
            qtyvalue:{}
        }
        
    }
    
    render() {

        const { getProduct } = this.props;

       function addclickHandler(product){
        //   console.log(product)
            getProduct(product);
        };

        return (
            <div className={style.productSection}>
                 {products.map(product => {
                     return (
                        <Media className={style.items}>
                        <img
                            width={64}
                            height={64}
                            className="align-self-center mr-3"
                            src={product.pic}
                            alt="Generic placeholder"
                            />
                        <Media.Body className={style.itemsbody}>
                            <h5>{product.name}</h5>
                            <p>${product.price}</p>
                            <Button variant="outline-primary" onClick={(e) => {
                                   e.preventDefault()
                                   addclickHandler(product)
                               }} size="sm">Add Product</Button>
                        </Media.Body>
                        </Media>
                     )
                 })}
         </div>
        )
    }
}


export default Product
