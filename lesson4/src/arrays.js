const arrNumber = [1, 2, 3, 4, 3];
const arrString = ['a', 'b', 'e', 'd', 'c'];
const arrBoolean = [false, true, true, false, true];
const arrMixed = [4, 'a', true, 1, 'e'];

console.log('Method filter()');
const filteredArrNumber = arrNumber.filter((el) => el === 3);
console.log(filteredArrNumber);

const filteredArrString = arrString.filter((el) => el === 'e');
console.log(filteredArrString);

const filteredArrBoolean = arrBoolean.filter((el) => el === true);
console.log(filteredArrBoolean);

const filteredArrMixed = arrMixed.filter((el) => typeof el === 'string');
console.log(filteredArrMixed);
console.log('--------------');

console.log('Method find()');
const findArrNumber = arrNumber.find((el) => el === 3);
console.log(findArrNumber);

const findArrString = arrString.find((el) => el === 'e');
console.log(findArrString);

const findArrBoolean = arrBoolean.find((el) => el === true);
console.log(findArrBoolean);

const findArrMixed = arrMixed.find((el) => typeof el === 'string');
console.log(findArrMixed);
console.log('--------------');

console.log('Method sort()');
const sortArrNumber = arrNumber.sort((a, b) => b - a);
console.log(sortArrNumber);

const sortArrString = arrString.sort();
console.log(sortArrString);

const sortArrBoolean = arrBoolean.sort();
console.log(sortArrBoolean);

const sortArrMixed = arrMixed.sort();
console.log(sortArrMixed);
console.log('--------------');

console.log('Method concat()');
const concatArrNumberString = arrNumber.concat(arrString);
console.log(concatArrNumberString);

const concatArrBooleanMixed = arrBoolean.concat(arrMixed);
console.log(concatArrBooleanMixed);
console.log('--------------');

console.log('Method includes()');
const includesArrNumberString = concatArrBooleanMixed.includes('e');
console.log(includesArrNumberString);

const includesArrBooleanMixed = concatArrBooleanMixed.includes('hello');
console.log(includesArrBooleanMixed);
console.log('--------------');

console.log('Method join()');
const joinArrNumber = arrNumber.join('*');
console.log(joinArrNumber);

const joinArrString = arrString.join(' ');
console.log(joinArrString);

const joinArrBoolean = arrBoolean.join('/');
console.log(joinArrBoolean);

const joinArrMixed = arrMixed.join('-*-');
console.log(joinArrMixed);
console.log('--------------');

console.log('Method [...arr1, ...arr2]');
const spreadArrNumberBoolean = [...arrNumber, ...arrBoolean];
console.log(spreadArrNumberBoolean);

const spreadArrStringMixed = [...arrString, ...arrMixed];
console.log(spreadArrStringMixed);

console.log('Method forEach()');
arrNumber.forEach((e) => console.log(e * e));

arrString.forEach((element, index) => console.log(`Index: ${index} and value: ${element}`));

arrBoolean.forEach((e) => console.log(e));

arrMixed.forEach((e) => console.log(typeof e));
console.log('--------------');

console.log('Method map()');
const mapArrNumber = arrNumber.map((e) => e * 3);
console.log(mapArrNumber);

const mapArrString = arrString.map((e) => e.toUpperCase());
console.log(mapArrString);

const mapArrBoolean = arrBoolean.map((e) => !e);
console.log(mapArrBoolean);

const mapArrMixed = arrMixed.map((e) => typeof e === 'string');
console.log(mapArrMixed);
console.log('--------------');
