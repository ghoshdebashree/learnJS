var students = [
  { 
    name: "Mary", 
    age: 10, 
    grades: [90, 88, 95]
  }, 
  {
    name: "Joseph", 
    age: 11, 
    grades: [80, 100, 90, 96]
  }
];
var getAverages = function(students){
  var averages = [];
  var sum = [];
  for(var i =0; i< students.length;i++){
    sum[i] = 0;
    averages[i] = 0;
    for(var j =0; j < students[i].grades.length;j++){
      sum[i] = sum[i] + students[i].grades[j];
    }
    averages[i] = sum[i]/students[i].grades.length;
  }
  return averages;
}
var result = getAverages(students);
console.log(students);