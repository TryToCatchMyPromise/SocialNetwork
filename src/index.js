import store from "./Redux/redux-store.ts";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from 'src/App'

  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <App/>
        </Suspense>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

