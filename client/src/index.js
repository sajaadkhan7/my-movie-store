import React from 'react';
//import  ReactDOM  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createRoot } from 'react-dom/client';
import ReactLoading from 'react-loading';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <App />

</Provider>);