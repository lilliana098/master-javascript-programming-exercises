function getAllElementsButNth(arr, index) {
  arr.splice(index, 1);  // remove one item beginning from the index
  return arr;
}

console.log(getAllElementsButNth(['a', 'b', 'c'], 1));