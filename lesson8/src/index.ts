import { RedChief } from './red-chief';
import { GrannySmith } from './granny-smith';
import { Breed } from './interfaces';
import { BreedSummary } from './classes';
import { getJson } from './interfaces';

const redApple = new RedChief();
const greenApple = new GrannySmith();

redApple.setTaste("sour");
greenApple.setColor("yellow");

async function getShortInfo(): Promise<BreedSummary[]> {
    const data = await getJson();
    return data.data.map((breed: Breed) => new BreedSummary(breed));
}

(async () => {
    const shortInfo = await getShortInfo();
    console.log(shortInfo);
})();


console.log(redApple.getAppleType());
console.log(redApple.getAppleInfo());
console.log(greenApple.getAppleType());
console.log(greenApple.getAppleInfo());

