const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" } // use this object to test your functions

function keys(obj) {

  const temp = []

  for (let key in obj) {
    temp.push(key)
  }

  return temp

}

function values(obj) {

  const key = keys(obj)

  const temp = []

  for (let i = 0; i < key.length; i++) {
    temp.push(obj[key[i]])
  }

  return temp

}

function mapObject(obj, cb) {

  const temp = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = cb(obj[key], key)
    }
  }

  return temp

}

function pairs(obj) {

  const temp = []

  for (let key in obj) {
    temp.push([key, obj[key]])
  }
  return temp

}

/* STRETCH PROBLEMS */

function invert(obj) {

  const temp = {}
  for(let key in obj){
    temp[obj[key]] = key
  }
  return temp
}

function defaults(obj, defaultProps) {

  for(let key in defaultProps){
    if(obj[key] === undefined){
      obj[key] = defaultProps[key]
    }
  }
  return obj
}

export{
  testObject,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
}