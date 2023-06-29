// console.log("Start");

setTimeout(function() {
  console.log("thread 1");
}, 2000);

setTimeout(function() {
  console.log("thread 2");
}, 1000);

// console.log("End");

// asynchronous

for(let i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}


for(var i=0; i<10; i++){
    setTimeout(()=>{
        console.log(i);
    },i*1000)
}

