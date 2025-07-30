//  [7,6,5,4,3,2,1]

const numbers= [1,2,3,4,5,6,7];

// console.log(numbers);
// const reversed= numbers.reverse();
// console.log(reversed);

const rev_numbers= [];

for (const num of numbers){
    // console.log(num);
    rev_numbers.unshift(num)
}
console.log(rev_numbers);