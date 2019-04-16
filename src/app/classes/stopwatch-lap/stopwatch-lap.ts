import { Lap } from '../lap/lap';
import { ILap } from 'src/app/interfaces/lap';

export class StopwatchLap implements ILap {
    id: number = +new Date();
    laps: Lap[] = [];
    activeLap: Lap;
    comment: string;

    start() {
        if (this.activeLap && !this.activeLap.isEnded()) {
            this.stop();
        }

        const lap = new Lap().start();
        this.activeLap = lap;
        this.laps.push(lap);

        return this;

    }

    stop() {
        if (this.activeLap) {
            this.activeLap.stop();
            this.activeLap = null;
        }

    }

    unixTime(): number {
        return this.laps.reduce( (actual, lap) => actual + lap.unixTime(), 0);
    }

    formatedTime(): string {
        const unix_sec: number = this.unixTime();
        const hours:    number = Math.floor(unix_sec / 3600);
        const minutes:  number = Math.floor((unix_sec - (hours * 3600)) / 60);
        const seconds:  number = unix_sec - (hours * 3600) - (minutes * 60);

        let hours_str:   string = (hours < 10 ? "0" : "") + hours;
        let minutes_str: string = (minutes < 10 ? "0" : "") + minutes + "";
        let seconds_str: string = (seconds < 10 ? "0" : "") + seconds + "";

        return hours_str + ':' + minutes_str + ':' + seconds_str;
    }

    toJSON() {
        return {
            id: this.id,
            laps: this.laps,
            activeLapId: this.activeLap && this.activeLap.id,
            comment: this.comment
        };
    }

    restore(configuration) {
        this.id = configuration.id;
        this.laps = configuration.laps.map( lap => new Lap().restore(lap) );
        this.activeLap = this.laps.find( lap => lap.id === configuration.activeLapId );
        this.comment = configuration.comment;

        return this;

    }
    
}
