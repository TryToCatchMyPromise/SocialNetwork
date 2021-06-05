import store from "./Redux/redux-store.ts";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from 'src/App'

const obj = {
  one: {
    oneOne: 1,
    oneTwo: 2
  },
  two: 2

}

const deepCopyFunction = (inObject) => {
  let outObject = Array.isArray(inObject) ? [] : {}

  if (typeof inObject !== 'object' || inObject === null || !inObject.hasOwnProperty) {
    return inObject
  }

  for (let key in inObject) {
    let value = inObject[key]

    outObject[key] = deepCopyFunction(value)
  }

  return outObject
}

console.log("Copied obj: ", deepCopyFunction(obj))


  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <App/>
        </Suspense>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

