// global context overall kaj kore.
// function er vitore jeta sudu kaj korbe seta function er context.
let a = 5;
function add(num1,num2){
    const result = num1 + num2 + a ;
    return result;
}
const sum = add(3,2);
console.log(sum);