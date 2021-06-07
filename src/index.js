import store from "./Redux/redux-store.ts";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from 'src/App'

const arr = [
  { id: 14, name: 'Aassd', age: 14, role: 'admin', unic: true },
  { id: 15, name: 'List', age: 16, role: 'admin', unic: true }
];

const refFunction = (arr) => {
  return arr.reduce((acc, {id, ...rest}) => {
    return {...acc, [id]: { ...rest}  }
  }, {})
}

console.log('My func ', refFunction(arr))

  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <App/>
        </Suspense>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

