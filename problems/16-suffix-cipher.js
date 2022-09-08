/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

function suffixCipher(sentence, cipher) {
  let newSent = []
  let arr  = sentence.split(' ')

  for(let i = 0; i < arr.length; i++){
    let method1 = cipher.ly
    let method2 = cipher.ize

    let suffix1 = arr[i].slice(-2)
    let suffix2 = arr[i].slice(-3)

    // if suffix 1 or 2 mathces key then do value cb to arr[i] and push into new sent
      console.log(arr[i]);
    if(cipher[suffix1]){newSent.push(method1(arr[i]))}
    if(cipher[suffix2]){newSent.push(method2(arr[i]))}
    if(!cipher[suffix2] && !cipher[suffix1]){newSent.push(arr[i])}
  }
  return newSent.join(' ')
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch(e) {
  return null;
}