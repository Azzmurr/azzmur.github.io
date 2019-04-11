import { ILap } from 'src/app/interfaces/lap';

export class Lap implements ILap {
    id: number = +new Date();
    _start: Date | null = null;
    _end: Date | null = null;

    constructor() {}

    get unix(): number {
        const now: number = +new Date();
        const end: number = +( this._end || now );
        const start: number = +( this._start || now );

        return end - start;

    }

    isEnded(): boolean {
        return this._end !== null
    }

    start(): LapMini {
        if (this._end === null) {
            this._start = new Date();
        }

        return this;
    }

    stop(): LapMini {
        this._end = new Date();
        
        return this;
    }
}
