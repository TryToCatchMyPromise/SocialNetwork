import {convertFunc} from 'src/converFunc'

type testCaseType = {
  input: string,
  output: string
}

type initialValueCasesType = {
  [field: string]: testCaseType
}


const initialValueCases: initialValueCasesType = {
  first: {
    input: 'string',
    output: 'S1T1R1I1N1G1'
  },
  second: {
    input: 'StrINg',
    output: 'S1T1R1I1N1G1'
  },
  third: {
    input: 'abc',
    output: 'A1B1C1'
  },
  fourth: {
    input: '',
    output: ''
  },
  fifth: {
    input: '346$#@&22$#^*',
    output: ''
  },
  sixth: {
    input: '@st$6ring3',
    output: 'S1T1R1I1N1G1'
  },
  seventh: {
    input: 'aaa4HHH7&JJJJJJJ',
    output: 'A3H3J7'
  }
}

it('String with the letters only', () => {
  const result = convertFunc(initialValueCases.first.input)
  expect(result).toBe(initialValueCases.first.output)
})

it('String with the capital and uppercase letters should be the same', () => {
  const result = convertFunc(initialValueCases.second.input)
  expect(result).toBe(initialValueCases.second.output)
})

it('Output string should be with the last uppercase letter', () => {
  const result = convertFunc(initialValueCases.third.input)
  expect(result).toBe(initialValueCases.third.output)
})

it('Null string in input should be null at the output', () => {
  const result = convertFunc(initialValueCases.fourth.input)
  expect(result).toBe(initialValueCases.fourth.output)
})

it('Input string full of numbers ans special symbols should be empty at the output', () => {
  const result = convertFunc(initialValueCases.fifth.input)
  expect(result).toBe(initialValueCases.fifth.output)
})

it('String consisting of the letters, symbols and numbers without the repeated letters ', () => {
  const result = convertFunc(initialValueCases.sixth.input)
  expect(result).toBe(initialValueCases.sixth.output)
})

it('String consisting of the letters, symbols and numbers with the repeated letters ', () => {
  const result = convertFunc(initialValueCases.seventh.input)
  expect(result).toBe(initialValueCases.seventh.output)
})


