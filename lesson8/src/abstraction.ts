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
