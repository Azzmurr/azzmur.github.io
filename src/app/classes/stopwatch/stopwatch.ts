import { StopwatchLap } from '../stopwatch-lap/stopwatch-lap';
import { IFormatedTime } from 'src/app/interfaces/formated-time';
import { Observable } from 'rxjs';

export class Stopwatch {
    id: number = +new Date();
    laps: StopwatchLap[] = [];
    lapsMap = {};
    activeLap: StopwatchLap;
    inProgress: boolean = false;
    time: string = "";

    private timeObserverFunc = observer => {
        const interval = setInterval(() => {
            const stopwatchTime = this.formatedTime();

           if (this.time !== stopwatchTime.str) {
            this.time = stopwatchTime.str;
            observer.next(stopwatchTime);
           }

        }, 200)

    };

    time$ = new Observable(this.timeObserverFunc);

    start(): Stopwatch {
        if (this.activeLap) {
            this.activeLap.start();

        } else {
            const lap = new StopwatchLap().start();
            this.lapsMap[lap.id] = lap;
            this.activeLap = lap;
            this.laps.unshift(lap);
        }
        this.inProgress = true;

        return this;
    }

    stop(): Stopwatch {
        if (this.activeLap) {
            this.activeLap.stop();
        }
        this.inProgress = false;
        
        return this;
    }

    newLap(): Stopwatch {
       this.stop();
       this.activeLap = null;

       return this.start();
    }

    continiueLap(id: number) {
        this.stop();
        if (this.lapsMap[id]) this.activeLap = this.lapsMap[id];

        return this.start();

    }

    reset(): Stopwatch {
        this.stop();
        this.laps.length = 0;
        this.activeLap = null;

        
        return this;
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


    toJSON() {
        return {
            id: this.id,
            laps: this.laps,
            activeLapId: this.activeLap && this.activeLap.id
        }
    }

    restore(configuration: string) {
        const parcedConfiguration = JSON.parse(configuration);
        this.id = parcedConfiguration.id;
        this.laps = parcedConfiguration.laps.map( lap => new StopwatchLap().restore(lap) );
        this.lapsMap = this.laps.reduce( (laps, lap) => (laps[lap.id] = lap) && laps, {} )
        this.activeLap = this.lapsMap[parcedConfiguration.activeLapId];     
        
        this.inProgress = !!this.activeLap;
    }

}
