const mulitLine = 'This is my first line \n' +
    'This is my second line \n' +
    'THis is my Third line \n' +
    'THis is my fourth line \n' +
    '12 september medtram exam';
// console.log(mulitLine);
const friends = ['abul', 'kabul', 'sabul', 'tabul']
const lineNew = `hellow bangla desh 
tmi kmon achu 
amr sonar bangla ami tomai 
valibashi, tmi ki janu nh ami je tmr?`
    // console.log(lineNew);
const count = 5;
const friend = `<h2 class="friens-anem">hellow banladesh - ${count}</h2>`;
const first = 'Ridwan';
const last = 'Chowdury';
// const name = first + ' ' + last;
const name = `This person name is: ${first} ${last}. Has money ${friends.length * 500} `;
// console.log(name);

// function experssion
const add1 = function add1(num1, num2) {
    return num1 + num2;
}
const sum1 = add1(10, 20);
const sum2 = add1(10, 20);
// console.log(sum1, sum2);

// function experssion (anonymous)
const add3 = function(num1, num2) {
    return num1 + num2;
}
const sum3 = add3(12, 34);
// console.log(sum3);

// arrow function 
const add4 = (num1, num2) => num1 + num2;
const sum4 = add4(12, 39);
console.log(sum4);