var numbers = [
  [1, 2, 3, 4],
  [5, 6, 7], 
  [8, 9, 10, 11, 12]
];

var arraySum = function arraySum(numbers) {
  var sums = [];
  
  for(var i =0 ; i < numbers.length; i++){
    sums[i] = 0;
    
    for(var j = 0; j < numbers[i].length; j++){
      sums[i]= sums[i]+ numbers[i][j];
      
    }
  }
  return sums;
}

var result = arraySum(numbers);
console.log(result); // [10, 18, 40]