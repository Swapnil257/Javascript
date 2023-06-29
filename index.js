
// Using let variable
let x = 3;
x = 56;
()=>{
  let x = 4;
  console.log(x);
}
console.log(x); 

// Using var variable
var y = 7;
y = 5;
{
  var y= 3;
}
console.log(y); 

// Using const variable
const a = 8
// a = 6
{
  const a = 2
  console.log(a);
}
console.log(a); 


