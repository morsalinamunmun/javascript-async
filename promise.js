const getData = new Promise((resolve, reject) =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(55679);
    }else{
        reject('no data available');
    }
})

getData
    .then(data => console.log(data))
    .catch(err => console.log('ERR:', err))