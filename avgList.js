const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];

var std = students.filter(students => students.sex == 'f');
var sumGrades = [];
var grades=[];
for(var i = 0; i < std.length; i++){
   sumGrades[i] = std[i].grades.reduce((acc, value) => acc + value, 0);
   grades[i] = sumGrades[i]/std[i].grades.length;
   std[i].grades = grades[i];
}
for(var i = 0; i < std.length; i++){
    console.log(std[i]);
}