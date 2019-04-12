import { ILap } from 'src/app/interfaces/lap';

export class Lap implements ILap {
    id: number = +new Date();
    _start: Date | null = null;
    _end: Date | null = null;
    _finalTime: number | null = null;

    constructor() {}

    unixTime(): number {
        if (this._finalTime) return this._finalTime;
        
        const now: number = +new Date();
        const start: number = +( this._start || now );

        return now - start;
    }

    isEnded(): boolean {
        return this._end !== null;
    }

    start(): Lap {
        if (!this.isEnded()) {
            this._start = new Date();
        }

        return this;
    }

    stop(): Lap {
        this._end = new Date();
        this._finalTime = this.unixTime();
        
        return this;
    }
}
