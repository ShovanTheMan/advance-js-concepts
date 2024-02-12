const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(5666546);
    }
    else{
        reject('No Data Available')
    }
})
 getData
.then(data => console.log(data))
// // getData.then(data => console.log(data + 4));
// //5666546 5666550
.catch(err => console.log('Err:',err))

