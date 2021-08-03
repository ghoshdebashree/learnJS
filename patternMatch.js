const governmentForms = [{
  name: "Plutocracy",
  definition: "Rule by the wealthy"
},
{
  name: "Oligarchy",
  definition: "Rule by a small number of people"
},
{
  name: "Kleptocracy",
  definition: "Rule by the thieves"
},
{
  name: "Theocracy",
  definition: "Rule by a religious elite"
},
{
  name: "Democracy",
  definition: "Rule by the people"
},
{
  name: "Autocracy",
  definition: "Rule by a single person"
}];
function endCy(governmentForms) {
  // Return the names of political forms ending with 'cy'

  const newList = governmentForms.map(governmentForms => governmentForms.name);
  const newData = newList.filter(newList => newList.endsWith("cy"));
  return newData;
}
var output = endCy(governmentForms);
console.log(output);