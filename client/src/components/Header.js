import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import {
    Collapse,
    Navbar,
    // NavbarToggler,
    // NavbarBrand,
    Nav,
    Container,
} from 'react-bootstrap';

class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <Navbar className="header" expand="md" variant="dark">
                <Container>
                    <Navbar.Brand className='custom-brand'>EmployeeManagementSystem</Navbar.Brand>
                    <Navbar.Toggle onClick={this.toggle} />
                    <Collapse>
                        
                        <Nav className="ml-auto nav" variant="pills">
                            <LinkContainer exact to="/">
                                <Nav.Link className="custom-nav-item">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/add">
                                <Nav.Link className="custom-nav-item">NewEmployee</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default nav