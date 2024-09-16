function counterFactory() {

    let count = 0
  
    const obj = {
      increment() {
        return ++count
      },
  
      decrement() {
        return --count
      },
    }
    return obj
  }
  
  function limitFunctionCallCount(cb, n) {

    let count = 0
    return function limit(...args) {
      if (count < n) {
        count++
        return cb(args)
      } else return null
    }
  }
  
  function cacheFunction(cb) {

    let cache = {}
  
    return function sol(...args) {
      const key = JSON.stringify(args)
  
      if (cache.hasOwnProperty(key)) {
        console.log("Cached Answer Returned")
        return cache[key]
      } else {
        console.log("Uncached")
        const result = cb(...args)
        cache[key] = result
        return result
      }
    }
  }
  
  export { counterFactory, limitFunctionCallCount, cacheFunction }