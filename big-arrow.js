const sum2 = (num1, num2) => num1 + num2;
const total = sum2(10, 20);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(4, 12, 2);

const tenTimes = num1 => num1 * 5;
const output = tenTimes(10);

const getName = () => 'Barondom se'
const name = getName();
// console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const sum1 = x - y;
    const all = sum * sum1;
    const result = all * 5;
    const output = result * sum;
    return output;
}
const mathResult = doMath(12, 20);
console.log(mathResult);