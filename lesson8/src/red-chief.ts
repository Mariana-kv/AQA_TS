import { Apples } from './abstraction';

export class RedChief extends Apples {
    public constructor() {
        super("sweet", "red");
    }

    public getAppleType(): string {
        return "Red Chief";
    }
}
