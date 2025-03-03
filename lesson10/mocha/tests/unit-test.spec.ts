import { expect } from 'chai';
import {Developer} from '../src/developer';
import { Qa } from '../src/qa';
import { displayWorkerDetails } from '../src/index';
import sinon from 'sinon';


describe('displayWorkerDetails', () => {
    let developer: Developer;
    let manager: Qa;

    beforeEach(() => {
        developer = new Developer(15);
        manager = new Qa(3);
    });

    it('should call workerStatus and log workerSpeciality for Developer', () => {
        const workerStatusSpy = sinon.spy(developer, 'workerStatus');
        const consoleLogSpy = sinon.spy(console, 'log');

        displayWorkerDetails(developer);

        expect(workerStatusSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith(developer.workerSpeciality)).to.be.true;

        workerStatusSpy.restore();
        consoleLogSpy.restore();
    });

    it('should call workerStatus and log workerSpeciality for Qa', () => {
        const workerStatusSpy = sinon.spy(manager, 'workerStatus');
        const consoleLogSpy = sinon.spy(console, 'log');

        displayWorkerDetails(manager);

        expect(workerStatusSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWith(manager.workerSpeciality)).to.be.true;

        workerStatusSpy.restore();
        consoleLogSpy.restore();
    });
});
