// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3) {
  if (word1.length < word2.length && word1.length < word2.length) {
    return word1.length;
  } else if (word2.length < word3.length && word2.length < word1.length) {
    return word2.length
  } else {
    return word3.length;
  }
}

function findMinLengthOfThreeWords(word1, word2, word3) {
  var arr = [];
  arr.push(word1, word2, word3);
  arr.sort();
  return arr[0].length;
}

function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  /* START SOLUTION */
  words = [word1, word2, word3];
  return words.sort()[0].length;
  /* END SOLUTION */
}

function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length)
}