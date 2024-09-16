const items = [1, 2, 3, 4, 5, 5] // use this array to test your code.

function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i, elements)
  }
  return
}

function map(element, cb) {

  let solution = []
  for (let i = 0; i < element.length; i++) {
    solution.push(cb(element[i], i, element))
  }
  return solution
}

function reduce(elements, cb, startingValue) {

  let accumulator = startingValue !== undefined ? startingValue : elements[0]
  let i = startingValue !== undefined ? 0 : 1

  for (; i < elements.length; i++) {
    accumulator = cb(accumulator, elements[i])
  }
  return accumulator
}

function find(elements, cb) {

  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], i)) return elements[i]
  }

  return undefined

}

function filter(elements, cb) {
  const solution = []
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], i, elements)) solution.push(elements[i])
  }
  return solution
}

const nestedArray = [1, [2], [[3]], [[[4]]]] // use this to test 'flatten'

function flatten(elements) {

  let solution = []

  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) solution = solution.concat(flatten(elements[i]))
    else solution.push(elements[i])
  }
  return solution
}

export { items, nestedArray, each, map, reduce, find, filter, flatten }