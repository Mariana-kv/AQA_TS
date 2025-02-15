const getSumArray1 = (array: (string | number)[]): number => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const number = parseFloat(array[i] as string);
        if (!isNaN(number)) {
            sum += number;
        }
    }
    return sum;
};

const stringArray1 = ["1", "twenty", "15", "8"];
const numberArray1 = [1, 20, 15, 8];

console.log("Sum of numbers:", getSumArray1(numberArray1));
console.log("Sum of strings:", getSumArray1(stringArray1));
