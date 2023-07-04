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

// let global 

// var 

console.log(x);   // undefined
var x = 10;

// console.log(y);   // not found  reference error
// let y = 10;


const fibonacciSeries = (length) => {
  return Array.from({ length }).reduce((sequence, _, index) => {
    if (index < 2) {
      sequence.push(index);
    } else {
      const sum = sequence[index - 1] + sequence[index - 2];
      sequence.push(sum);
    }
    return sequence;
  }, []);
};

// Generate Fibonacci series with a length of 10
const series = fibonacciSeries(10);
console.log(series); [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





function fibo(n){
  let arr = [2,4,5,6,9]
// helper array we need to run reduce loop 
// else it will not print n no of elements and stop within first few iterations

  for(let i=0; i<n; i++){
      arr.push(0); 
  }

  let ans = arr.reduce((acc,val,i)=>{
      acc.push(acc[acc.length-1] + acc[acc.length-2]);    
      return acc;
  },[1,2])
  console.log(ans);
}
  
fibo(15)