// Write your function here
function computeAverageLengthOfWords(word1, word2) {
  // your code here
    //return ((num1*1 + num2*1) /2);
    return ((word1.length*1 + word2.length*1) /2);
}

console.log(computeAverageLengthOfWords("code", "programs"));

function getAverageOfElementsAtProperty (obj,key){
    let sum = 0
    for (e in obj.key) sum += obj.key[e];
    return (isNaN(sum / obj[key].length))?0:(sum / obj[key].length)
}

function computeAverageLengthOfWords(word1, word2) {
 
    return ((word1.length*1 + word2.length*1) /2);
}

console.log(computeAverageLengthOfWords("code", "programs"));