import { RedChief, Apples } from './abstraction';

class GrannySmith extends Apples {
    public constructor() {
        super("tart", "green");
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getAppleType(): string {
        return "Granny Smith";
    }
}

const redApple = new RedChief();
const greenApple = new GrannySmith();

redApple.setTaste("sour");
greenApple.setColor("yellow");

console.log(redApple.getAppleType());
console.log(redApple.getAppleInfo());
console.log(greenApple.getAppleType());
console.log(greenApple.getAppleInfo());

