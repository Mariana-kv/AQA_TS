export abstract class Apples {
    public taste: string;
    public color: string;

    public constructor(taste: string, color: string) {
        this.taste = taste;
        this.color = color;
    }

    public getAppleInfo(): string {
        return `This ${this.color} apple tastes ${this.taste}.`;
    }

    public abstract getAppleType(): string;


    public setTaste(newTaste: string): void {
        this.taste = newTaste;
    }

    public setColor(newColor: string): void {
        this.color = newColor;
    }
}

export class RedChief extends Apples {
    public constructor() {
        super("sweet", "red");
    }

    public getAppleType(): string {
        return "Red Chief";
    }
}

export class GrannySmith extends Apples {
    public constructor() {
        super("supersweet", "green");
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

