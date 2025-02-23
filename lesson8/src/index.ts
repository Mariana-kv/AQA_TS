import { RedChief } from './red-chief';
import { GrannySmith } from './granny-smith';

const redApple = new RedChief();
const greenApple = new GrannySmith();

redApple.setTaste("sour");
greenApple.setColor("yellow");

console.log(redApple.getAppleType());
console.log(redApple.getAppleInfo());
console.log(greenApple.getAppleType());
console.log(greenApple.getAppleInfo());

