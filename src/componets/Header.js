import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import style from './componet.module.css'

function Header() {
    return (
            <Navbar bg="dark" variant="dark" sticky="top" className={style.brandNavbar}>
                <Container>
                <Navbar.Brand>SMALL SHOP CART</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Made by Amit Kumar Rout
                </Navbar.Text>
            </Navbar.Collapse>
                </Container>
        </Navbar>
  
    )
}

export default Header
