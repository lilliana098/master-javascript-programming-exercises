// Write your function here
function addToFrontOfNew(arr, element) {
  var newArray = arr.slice();
  newArray.unshift(element);
  return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]


//----or----
function addToFrontOfNew(arr, element) {
  var newArr = [];
  newArr.push(element);
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]