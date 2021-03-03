// Write your function here

function areValidCredentials(name, pw) {
  if (name.length > 3 && pw.length >= 8) {
    return true;
  } else {
    return false;
  }
}

console.log(areValidCredentials('Ritu', 'mylongpassword'));