import store from './Redux/redux-store.ts'
import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {App} from 'src/App'

const sortFunc = (firstString, secondString) => {

  const splittedFirstString = firstString.split('')
  const splittedSecondString = secondString.split('')
  console.log('Split first: ', splittedFirstString)
  let result = []

  for (let i = 0; i < splittedFirstString.length - 1; i++) {
    console.log('For iteration')
    console.log(splittedFirstString[i])
    console.log(splittedSecondString[i])
    console.log(splittedFirstString[i] > splittedSecondString[i])
    if (splittedFirstString[i] === splittedSecondString[i]) {
      continue
    }

    if (splittedFirstString[i] > splittedSecondString[i]) {
      result = splittedSecondString
      break
    } else {
      result = splittedFirstString
      break
    }
  }

  return result.join('')
}

  sortFunc('Helloa', 'Hellob')

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <App/>
      </Suspense>
    </Provider>
  </BrowserRouter>, document.getElementById('root'))

