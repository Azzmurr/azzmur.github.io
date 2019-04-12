import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { Observable, ReplaySubject } from 'rxjs';

let services = {};

export class StopwatchService {
    constructor(stopwatch: Stopwatch) {
        this.stopwatch = stopwatch
    }

    private stopwatch: Stopwatch;
    private stopwatchTime: string;
    private activeLapTime: string;
    private activeLapObserver
    private activeLapObserverFunc = observer => {
        this.activeLapObserver = observer;
    }
    private timeObserverFunc = () => {
        const interval = setInterval(() => {
            let stopwatchTime = this.stopwatch.formatedTime();
            let activeLapTime = this.stopwatch.activeLap && this.stopwatch.activeLap.formatedTime();

           if (this.stopwatchTime !== stopwatchTime.str && this.activeLapTime !== activeLapTime) {
               console.log(stopwatchTime.str, activeLapTime);
            this.stopwatchTime = stopwatchTime.str;
            this.activeLapTime = activeLapTime;
            this.timeObservable.next({
                stopwatchTime, 
                activeLapTime
            });
           }

        }, 1000)

    };

    private timeObservable = new ReplaySubject(5);
    private activeLapObservable = new Observable(this.activeLapObserverFunc);

    
    start() {
        this.stopwatch.start();

    };
    stop() {
        this.stopwatch.stop();

    };
    lap() {
       const lap = this.stopwatch.newLap()
       this.activeLapObserver.next(lap);

    };

    time() {
        this.timeObserverFunc();
        return this.timeObservable;
    }

    activeLap() {
        return this.activeLapObservable;
    }

    getStopwatch() {
        return this.stopwatch;
    }

};

export const StopwatchServiceSingelton = {
   getInstanse(stopwatch: Stopwatch): StopwatchService {
       if (!services[stopwatch.id]) {
        services[stopwatch.id] = new StopwatchService(stopwatch);

       }

       return services[stopwatch.id];
   }
};
