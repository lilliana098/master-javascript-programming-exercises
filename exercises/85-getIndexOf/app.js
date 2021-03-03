// Write your function here
function getIndexOf(char, str) {
  if (!str.includes(char)) {
    return -1;
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2