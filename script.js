const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue] += 1;
  } else {
    accumulator[currentValue] = 1; 
  }
  return accumulator; 
}, {});

console.log(fruitCount); 