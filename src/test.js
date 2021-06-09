const array = [340, 885, 740, 286, 271]

const res = array.reduce((acc, cur) => {
  return acc += cur
}, 0)
// [1, 0 , 1]
const addFunc = (arr) => {
  const arrStrings = toString((Number(arr.join('')) + 1)).split('')
  return arrStrings.map((stringNumber) => {
    return Number(stringNumber)
  })
}

// 'AABBCCCCnnn#2NNMMM'
// 'A2B2C4N3N2M3'

// [A, B, C, n, N, M]

const uniqFunc = (text) => {
  const letterArr = ['A', 'B', 'C', 'n', 'N', 'M']
  return text.split('').reduce((acc, cur) => {
    for (let i in letterArr) {

    }
    if (acc.memoizedValue === cur) {
      ++acc.counter
    } else {
      acc.accumulator = acc.accumulator + acc.memoizedValue.toUpperCase()
      acc.accumulator = acc.accumulator + acc.counter.toString()
      acc.memoizedValue = cur
      acc.counter = 0
    }
      return acc

  }, {accumulator: '', memoizedValue: text[0], counter: 1})
}

