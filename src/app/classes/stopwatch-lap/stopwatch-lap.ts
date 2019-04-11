import { Lap } from '../lap-mini/lap';
import { ILap } from 'src/app/interfaces/lap';

export class StopwatchLap implements ILap {
    id: number = +new Date();
    laps: Lap[] = [];
    activeLap: Lap;

    start() {
        if (this.activeLap && this.activeLap.isEnded()) {
            this.stop();
        }

        const lap = new Lap().start();
        this.activeLap = lap;
        this.laps.push(lap);

        return this;

    }

    stop() {
        this.activeLap.stop();

    }

    get unix(): number {
        return this.laps.reduce( (actual, lap) => actual + lap.unix, 0);
    }

    get string(): string {
        const unix_sec: number = Math.floor(this.unix / 1000);
        const hours: number = Math.floor(unix_sec / 3600);
        const minutes: number = Math.floor((unix_sec - (hours * 3600)) / 60);
        const seconds: number = unix_sec - (hours * 3600) - (minutes * 60);

        let hours_str: string = hours + "";
        let minutes_str: string = minutes + "";
        let seconds_str: string = seconds + "";

        if (hours   < 10) {hours_str   = "0" + hours;}
        if (minutes < 10) {minutes_str = "0" + minutes;}
        if (seconds < 10) {seconds_str = "0" + seconds;}

        return hours_str + ':' + minutes_str + ':' + seconds_str;
    }
    
}
