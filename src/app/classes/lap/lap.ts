import { ILap } from 'src/app/interfaces/lap';

export class Lap implements ILap {
    id: number = +new Date();
    _start: number = 0;
    _end: number = 0;
    _finalTime: number = null;

    constructor() {}

    unixTime(): number {
        if (this._finalTime !== null) return this._finalTime;
        
        const now: number = Math.floor(+new Date() / 1000);
        const start: number = this._start || now;

        return now - start;
    }

    isEnded(): boolean {
        return this._finalTime !== null;
    }

    start(): Lap {
        if (!this.isEnded()) {
            this._start = Math.floor(+new Date() / 1000);
        }

        return this;
    }

    stop(): Lap {
        this._end = Math.floor(+new Date() / 1000);
        this._finalTime = this.unixTime();
        
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            start: this._start,
            end: this._end,
            finalTime: this._finalTime
        };
    }
}

