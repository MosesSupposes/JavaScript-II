// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const add = a => b => a + b
console.log('Challenge 1: ', add(2)(2))

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// Return a function that when invoked increments and returns a counter variable.
const counter = () => {
  var count = 0
  return () => ++count
}

const counter1 = counter()
console.log('Challenge2: ', counter1(), counter1(), counter1())


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  var count = 0
  return () => ({ increment(){ return ++count }, decrement(){ return --count } })
}

const counter2 = counterFactory()()
console.log('Challenge 3:')

const increment = counter => counter.increment
for (let i = 5; i > 0; i--) {
  console.log('incrementing... closed over count is now', counter2.increment())
}

console.log('decrementing... closed over count is now', counter2.decrement())