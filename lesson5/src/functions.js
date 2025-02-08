function getSumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const number = parseFloat(array[i]);
        if (!isNaN(number)) {
            sum += number;
        }
    }
    return sum;
}

const stringArray = ["1", "twenty", "15", "8"];
const numberArray = [1, 20, 15, 8];

console.log("Sum of numbers:", getSumArray(numberArray));
console.log("Sum of strings:", getSumArray(stringArray));
