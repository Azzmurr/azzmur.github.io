import { StopwatchLap } from '../stopwatch-lap/stopwatch-lap';
import { Observable } from 'rxjs';
import { IFormatedTime } from 'src/app/interfaces/formated-time';

export class Stopwatch {
    laps: StopwatchLap[] = [];
    activeLap: StopwatchLap;

    private pastTime: string;
    private timeObserver = observer => {
        const interval = setInterval(() => {
            const formatedTime: IFormatedTime = this.formated;
            if (this.pastTime !== formatedTime.str) {
                this.pastTime = formatedTime.str;
                observer.next(formatedTime);
            }

        }, 500)

        return () => {
            clearInterval(interval);
        }

    };

    time = new Observable(this.timeObserver);

    start() {
        if (this.activeLap) {
            this.activeLap.start();

        } else {
            const lap = new StopwatchLap().start();
            this.activeLap = lap;
            this.laps.push(lap);
        }
    }

    stop() {
        if (this.activeLap) {
            this.activeLap.stop();
        }
    }

    newLap() {
        if (this.activeLap) {
            this.activeLap.stop();
            this.activeLap = null;

        }

        this.start();
    }

    reset() {
        this.laps.length = 0;
        this.activeLap = null;

    }

    get unix(): number {
        return this.laps.reduce( (actual, lap) => actual + lap.unix, 0);
    }

    get formated(): IFormatedTime {
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

        return {
            h: hours_str,
            m: minutes_str,
            s: seconds_str,
            str: hours_str + ':' + minutes_str + ':' + seconds_str
        }
    }

}
