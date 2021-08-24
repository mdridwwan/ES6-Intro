 const numbers = [12, 23, 45, 23, 76, 54, 67, ];
 console.log(numbers);
 console.log(...numbers);

 const max = Math.max(12, 234, 3454, 32, 32);
 const maxInArray = Math.max(...numbers);
 //  console.log(max, maxInArray);
 const numbers2 = [...numbers, 88];
 numbers.push(55);
 console.log(numbers);
 console.log(numbers2);