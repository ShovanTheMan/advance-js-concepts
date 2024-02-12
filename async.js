console.log(1);
console.log(2);
 setTimeout(() => {
    console.log('lazy dog');
}, 4000);
// 4000 milisecond = 4 second por show korbe 
// settimeout,fetch they cannot obtain serial they come in the end in serial.
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}
let num = 0;
 const intervalId = setTimeout(()=>{
    console.log(num++)
 },2000);