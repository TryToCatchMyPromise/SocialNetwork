export const convertFunc = (text) => {
  const filteredText = text.replace(/[^a-zA-Z ]/g, "");

  return filteredText.split('').reduce((acc, cur, index) => {

    if (acc.memoizedValue !== cur){
      acc.accumulator = acc.accumulator + acc.memoizedValue.toUpperCase()
      acc.accumulator = acc.accumulator + acc.counter.toString()
      acc.memoizedValue = cur
      acc.counter = 1
    } else {
      acc.counter++
    }

    if (index === filteredText.length - 1){
      acc.accumulator = acc.accumulator + cur.toUpperCase() + acc.counter
    }

    return acc

  }, {accumulator: '', memoizedValue: filteredText[0], counter: 0}).accumulator
}
