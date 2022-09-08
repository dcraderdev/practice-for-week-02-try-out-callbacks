/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {
  if(cb === undefined){return Math.min(...array)}
  else {
    let newArr = []
    for(let i = 0; i < array.length; i++){
      newArr.push(cb(array[i]))
    }
    return Math.min(...newArr)
  }

}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}