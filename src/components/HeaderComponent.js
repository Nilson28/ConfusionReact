import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Confusion</h1>
                            <p>we take inspiration from the world best cuisines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
                </Jumbotron>
            </>
        )
    }
}
