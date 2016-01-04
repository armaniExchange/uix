// Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/material.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './assets/styles/index.css';
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import configureStore from './store/configureStore';
// Routes
import appRoutes from './routes';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
	    {appRoutes}
	</Provider>,
	document.getElementById('root')
);
