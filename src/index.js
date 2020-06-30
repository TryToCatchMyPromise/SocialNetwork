import store from "./Redux/redux-store";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";



// ========================================

// let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <App/>
        </Suspense>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
// };

// rerenderEntireTree(store.getState());