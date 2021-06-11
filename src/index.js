import store from './Redux/redux-store.ts'
import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {App} from 'src/App'

const getRanges = (arr) => {
  const acc = arr.reduce((acc, cur, index) => {
    if (cur === acc.memoizedValue + 1) {
      if (index === arr.length - 1) {
        acc.accumulator = acc.accumulator + '-' + cur.toString()
        return acc
      }
      acc.counter++
    } else {
      if (acc.counter === 0) {
        if (index === 0) {
          acc.accumulator = acc.accumulator + cur.toString()
        } else {
          acc.accumulator = acc.accumulator + ',' + cur.toString()
        }
      } else {
        acc.accumulator = acc.accumulator + '-' + acc.memoizedValue.toString() + ',' + cur.toString()
      }
      acc.counter = 0
    }
    acc.memoizedValue = cur
    return acc
  }, {accumulator: '', memoizedValue: arr[0], counter: 0})
  return acc.accumulator
}

console.log(getRanges([0, 1, 2, 3, 4, 7, 8, 10])) // "0-4,7-8,10"
console.log(getRanges([4, 7, 10])) // "4,7,10"
console.log(getRanges([2, 3, 8, 9])) // "2-3,8-9"

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <App/>
      </Suspense>
    </Provider>
  </BrowserRouter>, document.getElementById('root'))

