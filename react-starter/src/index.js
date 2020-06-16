import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { name } from '../package.json';
import stitch from 'stitch-client';
import * as serviceWorker from './serviceWorker';

stitch.mount('react', name, { instance: <App/>, elementId: 'root', ReactDOM})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
