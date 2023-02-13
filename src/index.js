import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux";
import {history} from "./utils";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore();

root.render(
           <Provider store={store}>
               <BrowserRouter history={history}>
                   <App/>
               </BrowserRouter>
           </Provider>
);

