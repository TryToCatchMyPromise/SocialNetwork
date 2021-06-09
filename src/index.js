import store from "./Redux/redux-store.ts";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from 'src/App'
import {convertFunc} from 'src/converFunc'

const array = [340, 885, 740, 286, 271]

const res = array.reduce((acc, cur) => {
  return acc += cur
}, 0)
// [1, 0 , 1]
const addFunc = (arr) => {
  const arrStrings = (Number(arr.join('')) + 1).toString().split('')
  return arrStrings.map((stringNumber) => {
    return Number(stringNumber)
  })
}

// 'AABBCCCCnnn#2NNMMM'
// 'A2B2C4N3N2M3'

// [A, B, C, n, N, M]

const inputValue = 'AABBCCCCnnn#2NNMMMD'

console.log('Input value: ', inputValue)
console.log('Result: ', convertFunc(inputValue))

  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
      <App/>
        </Suspense>
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

