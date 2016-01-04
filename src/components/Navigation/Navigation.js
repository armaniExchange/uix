// Styles
import './Navigation.css';
// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="mdl-navigation mdl-layout--large-screen-only">
                <Link className="mdl-navigation__link" to="/adc/slb">My Forms</Link>
                <Link className="mdl-navigation__link" to="/adc/slb">My Wizard</Link>
            </nav>
        );
    }
}

export default Navigation;
