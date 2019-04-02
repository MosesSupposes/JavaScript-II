// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const lookInBackback = () => ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

const identity = x => x 

// getLength passes the length of the array into the callback.
const getLength = (cb, arr) => cb(arr.length)
console.log('getLegth: [Pencil, Notebook, yo-yo, Gum]', getLength(identity, lookInBackback()))


// last passes the last item of the array into the callback.
const last = (cb, arr) => cb(arr.slice(-1)[0])
console.log('last [Pencil, Notebook, yo-yo, Gum]: ', last(identity, lookInBackback()))

// sumNums adds two numbers (x, y) and passes the result to the callback.
const sumNums = (cb, x, y,) => cb(x + y)
console.log('sumNums [1,1]: ', sumNums(identity, 1, 1))

// multiplyNums multiplies two numbers and passes the result to the callback.
const multiplyNums = (cb, x, y) => cb(x * y)
console.log('mulitplyNums [10,10]: ', multiplyNums(identity, 10,10))

// contains checks if an item is present inside of the given array/list.
const contains = (cb, item, list) => list.includes(item) ? cb(true) : cb(false)
console.log('contains [Notebok]: ', contains(identity, 'Notebook', lookInBackback()))
console.log('contains [glock]: ', contains(identity, 'glock', lookInBackback()))


/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
function removeDuplicates(cb, arr) {
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const uniqueVals = arr.reduce(
    (acc,cur) => !(acc.includes(cur)) ? acc.concat(cur) : acc
  , [])

  return cb(uniqueVals)
}

console.log('removeDuplicates: [* x1000]', removeDuplicates(identity, Array(1000).fill('*')))
