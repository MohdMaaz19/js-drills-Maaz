const items = [1, 2, 3, 4, 5, 5] // use this array to test your code.

function each(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i, elements)
  }
  return
}

function map(element, cb) {

  let temp = []
  for (let i = 0; i < element.length; i++) {
    temp.push(cb(element[i], i, element))
  }
  return temp
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
  const temp = []
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], i, elements)) temp.push(elements[i])
  }
  return temp
}

const nestedArray = [1, [2], [[3]], [[[4]]]] // use this to test 'flatten'

function flatten(elements) {

  let temp = []

  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) temp = temp.concat(flatten(elements[i]))
    else temp.push(elements[i])
  }
  return temp
}

export { items, nestedArray, each, map, reduce, find, filter, flatten }