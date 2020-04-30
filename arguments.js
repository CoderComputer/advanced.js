function add(){
    sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        var sum = sum + element;
    };
    return sum;
}
const output = add(8, 5, 51, 10,500,500);
console.log(output)

// function addNumbers(num1, num2) {
//     sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const num = arguments[i];
//         var sum = sum + num;
//     }
//     return sum;
// }
// var nums = addNumbers(5,10,10,50);
// console.log(nums);