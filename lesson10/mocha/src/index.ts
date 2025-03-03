import {Developer} from './developer';
import {Qa} from './qa';
import { IWorker } from './worker';

export function displayWorkerDetails(worker: IWorker): void {
    worker.workerStatus();
    console.log(worker.workerSpeciality);
}

const developer = new Developer(15);
const manager = new Qa(3);
displayWorkerDetails(developer);
displayWorkerDetails(manager);
