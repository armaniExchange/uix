// Styles
import './IconNavigation.css';
// Libraries
import React, { Component } from 'react';
//import { Link } from 'react-router';

class IconNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="a10-icon-navigation">
                <li className="a10-icon-navigation__item">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" to="/">
                        <i className="material-icons">search</i>
                    </button>
                </li>
                <li className="a10-icon-navigation__item">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" to="/">
                        <i className="material-icons">view_module</i>
                    </button>
                </li>
                <li className="a10-icon-navigation__item">
                    <button id="a10-icon-navigation__more" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" to="/">
                        <i className="material-icons">more_vert</i>
                    </button>
                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="a10-icon-navigation__more">
                        <li className="mdl-menu__item">Some Action</li>
                        <li className="mdl-menu__item">Another Action</li>
                        <li disabled className="mdl-menu__item">Disabled Action</li>
                        <li className="mdl-menu__item">Yet Another Action</li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default IconNavigation;




