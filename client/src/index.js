//importing react 
import React from 'react';
import { createRoot } from 'react-dom/client';
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//import app component
import App from './App';
// provider compnent from the react redux used for wraping full app
// so that global storage by redux is available everywhere in app
import { Provider } from 'react-redux';
// importing redux related hooks
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
//import redux thunk for async actions when fetch data from api
import thunk from 'redux-thunk';



const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App />

</Provider>);