import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { Observable } from 'rxjs';


class StopwatcService {
    private stopwatch: Stopwatch = new Stopwatch();
    private stopwatchTime: string;
    private activeLapTime: string;
    private timeObserverFunc = observer => {
        const interval = setInterval(() => {
            let stopwatchTime = this.stopwatch.formated;
            let activeLapTime = this.stopwatch.activeLap.string;

           if (this.stopwatchTime !== stopwatchTime.str && this.activeLapTime !== activeLapTime) {
            this.stopwatchTime = stopwatchTime.str;
            this.activeLapTime = activeLapTime;
            observer.next({
                stopwatchTime, 
                activeLapTime
            });

           }

        }, 200)

        return () => {
            clearInterval(interval);
        }

    };

    private timeObserver = new Observable(this.timeObserverFunc);

    
    start() {
        this.stopwatch.start();

    };
    stop() {
        this.stopwatch.stop();

    };
    lap() {
        this.stopwatch.newLap();

    };
    formated() {
        return this.stopwatch.formated;
    };

    time() {
        return this.timeObserver;
    }

    getStopwatch() {
        return this.stopwatch;
    }

}

export const stopwatcService: StopwatcService = new StopwatcService();
