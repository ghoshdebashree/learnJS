const arrays = [[1, 4], [11], [3, 5, 7]];
function findSum(array) {
  // Return the sum of sub-arrays within 'array'
  var newSum =[];
  for( var i =0; i< array.length; i++){
    newSum[i] = array[i].reduce((acc, value) => acc + value, 0);
    }
  
  var result = newSum.reduce((acc, value) => acc + value ,0);
  return result;
}
var output = findSum(arrays);
console.log(output);
  
