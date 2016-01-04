// Styles
import './App.css';
// React & Redux
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// Components
import Header from '~/components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        /* eslint-disable */
        /* component handler is used by Material Design Lite, every react component
           needs to upgrade its DOM in order to maintain the effect.
        */
        componentHandler.upgradeDom();
        /* eslint-enable */
    }

    render() {
        const {
            navHeaderTitle
        } = this.props.appState;

        return (
            // The outer-most <div> is used by Material Design Lite to prevent DOM clash with React
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header headerTitle={navHeaderTitle} />
                <main>
                    <div>
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

App.propTypes = {
    appState  : PropTypes.object.isRequired,
    location   : PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        appState: state.app.toJS()
    };
}

export default connect(
    mapStateToProps
)(App);
