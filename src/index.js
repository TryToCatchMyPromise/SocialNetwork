import store from "./Redux/redux-store.ts";
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from 'src/App'

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

const convertFunc = (text) => {
  const letterArr = ['A', 'B', 'C', 'n', 'N', 'M', 'D']
  const letterSet = new Set(letterArr)
  return text.split('').reduce((acc, cur, index) => {

    if (!letterSet.has(cur)){
      return acc
    }

    if (acc.memoizedValue !== cur){
        acc.accumulator = acc.accumulator + acc.memoizedValue.toUpperCase()
        acc.accumulator = acc.accumulator + acc.counter.toString()
        acc.memoizedValue = cur
        acc.counter = 1
    } else {
        acc.counter++
    }

    if (index === text.length - 1){
      acc.accumulator = acc.accumulator + cur + acc.counter
    }

    return acc

  }, {accumulator: '', memoizedValue: text[0], counter: 0}).accumulator
}

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

