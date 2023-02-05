import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';


import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = 0, action) => {

    switch (action.type){
        case 'INC':
            return ++state
        case 'DEC':
            return --state
        default:
            return state
    }

}

const store = createStore(reducer);

console.log(store)
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

