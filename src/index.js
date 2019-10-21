import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/Home/index';
import * as serviceWorker from './serviceWorker';
import './bootstrap-custom.scss';
import './index.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
