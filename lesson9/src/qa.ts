// src/manager.ts
import { IWorker } from './worker';

export class Qa implements IWorker {
    public workerSpeciality: string;
    public workerExperience: number;
    private workerLeverJunior: string;
    private workerLeverMiddle: string;
    private workerLeverSenior: string;

    public get showStatus(): string {
        return this.workerSpeciality;
    }

    public constructor(expirience: number) {
        this.workerSpeciality = "QA";
        this.workerExperience = expirience;
        this.workerLeverJunior = "junior";
        this.workerLeverMiddle = "middle";
        this.workerLeverSenior = "senior";
    }

    public workerStatus(): void {
        if (this.workerExperience < 2) {
            console.log(this.workerLeverJunior);
        } else if (this.workerExperience >= 2 && this.workerExperience < 5) {
            console.log(this.workerLeverMiddle);
        } else {
            console.log(this.workerLeverSenior);
        }
    }
}
