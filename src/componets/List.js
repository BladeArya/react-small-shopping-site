import React from 'react'
import {Table,Button,ButtonGroup} from 'react-bootstrap'
import style from './componet.module.css'

function List(props) {
    const{product,removeProduct,getProduct}=props
    const itemsPrice = product.reduce((a, c) => a + c.qty * c.price, 0);
    if (product.length>0) {
        return(
            <div className={style.listSection}>
                <h3>CART</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Item Name</th>
                        <th></th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>ItemPrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map(p => {
                            return (
                                <>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>
                                    <ButtonGroup>
                                        <Button 
                                            variant="outline-dark"
                                            onClick={() => getProduct(p)}>
                                            +
                                        </Button>
                                        <Button 
                                            variant="outline-dark"
                                            onClick={() => removeProduct(p)}>
                                            -
                                        </Button>
                                    </ButtonGroup>
                                    </td>
                                    <td>{p.qty}</td>
                                    <td>{p.price}</td>
                                    <td>${p.price*p.qty}</td>

                                </tr>
                                </>
                            )
                        })}
                        <tr>
                            <td colSpan="4">TOTAL ITEM PRICE</td>
                            <td>${itemsPrice}</td>
                            </tr>
                    </tbody>
                </Table>
                <Button variant="outline-success" block onClick={()=>alert('Purchasing Successful')}>PROCEED TO CHECKOUT</Button>
            </div>
        )
    } else {
        return (
            <div className={style.listSection}>
                <h3>CART IS EMPTY</h3>
            </div>
        )
    }
    }


export default List



