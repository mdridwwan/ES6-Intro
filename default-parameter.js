function add(num1, num2 = 100) {
    console.log(num1, num2)

    // option
    // num2 = num2 || 0;
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;

    return total;
}
const total = add(10, 20);
console.log(total);


function fullname(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
};

const name = fullname('Ridwan', );
console.log(name);