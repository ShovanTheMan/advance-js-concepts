console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(() => {
    // num + 1 kore output dibe ++num e;
    console.log(++num)
    if(num === 10){
        clearInterval(intervalId);
    }
},1000)

// ctrl + c => off setInterval otherwise it will running
// clear interval to stop
console.log(4);
console.log(5);
console.log(6);