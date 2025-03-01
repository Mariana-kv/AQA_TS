import { IWorker } from './worker';

export class Developer implements IWorker {
    public workerSpeciality: string;
    public workerExperience: number;
    private workerLeverJunior: string;
    private workerLeverMiddle: string;
    private workerLeverSenior: string;
    private workerLeverLead: string;

    public get showStatus(): string {
        return this.workerSpeciality;
    }


    public constructor(expirience: number) {
        this.workerSpeciality = "Developer";
        this.workerExperience = expirience;
        this.workerLeverJunior = "junior";
        this.workerLeverMiddle = "middle";
        this.workerLeverSenior = "senior";
        this.workerLeverLead = "lead";
    }

    public workerStatus(): void {
        if (this.workerExperience < 2) {
            console.log(this.workerLeverJunior);
        } else if (this.workerExperience >= 2 && this.workerExperience < 5) {
            console.log(this.workerLeverMiddle);
        } else if (this.workerExperience >= 5 && this.workerExperience < 8) {
            console.log(this.workerLeverSenior);
        } else {
            console.log(this.workerLeverLead);
        }
    }
}

