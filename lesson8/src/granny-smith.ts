import { Apples } from './abstraction';

export class GrannySmith extends Apples {
    public constructor() {
        super("tart", "green");
    }

    public getAppleType(): string {
        return "Granny Smith";
    }
}
