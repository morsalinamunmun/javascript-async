console.log(1);
console.log(2);
//ctrl+c-interval off hobe
/* setInterval(() =>{
    console.log(3);
}, 1000) */
let num = 0;
/* setInterval(() =>{
    console.log(num++);
}, 1000) */
console.log(4);
console.log(5);
console.log(6);

const intervalId = setInterval(() =>{
    //num++;
    console.log(++num);
    if(num === 10){
        clearInterval(intervalId);
    }else{

    }
}, 1000)

//clearInterval(intervalid); 