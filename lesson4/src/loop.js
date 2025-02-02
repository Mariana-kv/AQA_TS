console.log('Loop FOR from 0 to 9');
let i;
for (i = 0; i <= 9; i++) {
    console.log(`Current value of the iterator is: ${i}`);
}

console.log('--------------');


console.log('Loop FOR from 100 to 0');
for (let m = 100; m >= 0; m -= 10) {
    console.log(`Current value of the iterator is: ${m}`);
}

console.log('--------------');

console.log('Loop WHILE from 0 to 9');
let j = 0;
while (j <= 9 ) {
    console.log(`Current value of the iterator is: ${j}`);
    j++;
}
console.log('--------------');

console.log('Loop WHILE from 100 to 0');
let q = 100;
while (q >= 0 ) {
    console.log(`Current value of the iterator is: ${q}`);
    q -= 10;
}
console.log('--------------');

console.log('Loop DO WHILE from 0 to 9');
let k = 0;
do {
    console.log(`Current value of the iterator is: ${k}`);
    k++;
} while (k <= 9);

console.log('--------------');

console.log('Loop DO WHILE from 100 to 0');
let a = 100;
do {
    console.log(`Current value of the iterator is: ${a}`);
    a -= 10;
} while (a >= 0);

