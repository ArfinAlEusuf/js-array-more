const person = ['rakib','nalib','sakib', 'akib','Pakib','anis','Anis'];
const sortedPersons = person.sort();
console.log(sortedPersons);

// sort --->
// const numbers = [6,5,4,7,9,8];
/**
 * Assending ---> smaller to larger: [4,5,6,7,8,9]
 * Desrnding ---> larger to smaller: [9,8,7,6,5,4]
*/
const numbers = [4,7,12,8,43,6,1];

// const numbers_asc= numbers.sort() //not working properly
const numbers_asc= [...numbers].sort(function(a,b){return a - b }) 
const numbers_dsc= [...numbers].sort(function(a,b){return b - a}) 
console.log(numbers_asc);
console.log(numbers_dsc);
