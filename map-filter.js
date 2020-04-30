const numbers = [5,10,158,3,55];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     output.push(element * element);
// }
// console.log(output)

// const result = numbers.map(function(element,index,array){
//     console.log(element,index,array)
// })
const result2 = numbers.map(element=> element*element);
console.log(result2)
const  filterize = numbers.filter(element => element>5);
console.log(filterize)
const finding = numbers.find(element => element<10)
console.log(finding);