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
}

export class RedChief extends Apples {
    public constructor() {
        super("sweet", "red");
    }

    public setTaste(taste: string): void {
        this.taste = taste;
    }

    public getAppleType(): string {
        return "Red Chief";
    }
}

const apple = new RedChief();
console.log(apple.getAppleType());
console.log(apple.getAppleInfo());
