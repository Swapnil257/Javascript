function forloop() {
    for (let i = 0; i < 7; i++) {
      console.log("i = " , i);
    }
  }
    forloop();

// for loop


function forEach(array) {
  array.forEach(function(elem) {
    console.log(" value for forEach: " , elem);
  });
}

let arr = [ 2, 3, 4, 5, 9];
forEach(arr);

//for each 

function sortnumber(number) {
  number.sort(function(a, b) {
    return a - b;
  });
  return number;
}

let num = [6, 7, 3, 1, 5];
let sort = sortnumber(num);
console.log(sort);

// sorting 


function sum(numbers) {
  return numbers.reduce(function(acc, currentnumber) {
    return acc + currentnumber;
  }, 0);
}

let number = [2, 7, 3, 8 ,5];
let sumnum = sum(number);
console.log(sumnum);

// reduce 


const array = [1,2,3,4];

const arrTwice = array.map((value) => {
  console.log(value);
  return value * 2;
});

console.log(array);
console.log(arrTwice);

// map


const car = ["alto", "wagonR", "swift", "dzire", ""];


function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(car, "ap"));  
console.log(filterItems(car, "an")); 

// filter
