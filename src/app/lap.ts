export class Lap {
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

    startTicking() {
        if (this._end === null) {
            this._start = new Date();
        }

        return this;
    }

    stopTicking() {
        this._end = new Date();
    
    }
}
