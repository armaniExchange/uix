// Styles
import './Header.css';
// Libraries
import React, { Component } from 'react';
// Components
import Navigation from '~/components/Navigation/Navigation';
import IconNavigation from '~/components/IconNavigation/IconNavigation';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">A10</span>
                    <Navigation />
                    <IconNavigation />
                </div>
            </header>
        );
    }
}

export default Header;
