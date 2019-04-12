import { StopwatchLap } from '../stopwatch-lap/stopwatch-lap';
import { IFormatedTime } from 'src/app/interfaces/formated-time';
import { Observable } from 'rxjs';

export class Stopwatch {
    id: number = +new Date();
    laps: StopwatchLap[] = [];
    activeLap: StopwatchLap;

    start(): StopwatchLap {
        if (this.activeLap) {
            this.activeLap.start();

        } else {
            const lap = new StopwatchLap().start();
            this.activeLap = lap;
            this.laps.push(lap);
        }

        return this.activeLap;
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

        return this.start();
    }

    reset() {
        this.laps.length = 0;
        this.activeLap = null;

    }

    unixTime(): number {
        return this.laps.reduce( (actual, lap) => actual + lap.unixTime(), 0);
    }

    formatedTime(): IFormatedTime {
        const unix_sec: number = this.unixTime();
        const hours: number = Math.floor(unix_sec / 3600);
        const minutes: number = Math.floor((unix_sec - (hours * 3600)) / 60);
        const seconds: number = unix_sec - (hours * 3600) - (minutes * 60);

        let hours_str:   string = (hours < 10 ? "0" : "") + hours;
        let minutes_str: string = (minutes < 10 ? "0" : "") + minutes + "";
        let seconds_str: string = (seconds < 10 ? "0" : "") + seconds + "";

        return {
            h: hours_str,
            m: minutes_str,
            s: seconds_str,
            str: hours_str + ':' + minutes_str + ':' + seconds_str
        }
    }

    private oldFormatedTime: string;
    private timeObserverFunc = observer => {
        const interval = setInterval(() => {
            const stopwatchTime = this.formatedTime();

           if (this.oldFormatedTime !== stopwatchTime.str) {
            this.oldFormatedTime = stopwatchTime.str;
            observer.next(stopwatchTime);
           }

        }, 200)

    };

    private timeObservable = new Observable(this.timeObserverFunc);

    time() {
        return this.timeObservable;
    }

}
