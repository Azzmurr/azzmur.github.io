import { Injectable } from '@angular/core';
import { Stopwatch } from '../classes/stopwatch/stopwatch';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {
  stopwatch: Stopwatch = new Stopwatch();

  constructor(private localStorageService: LocalStorageService) {
    window.onbeforeunload = e => {
      this.localStorageService.save(this.stopwatch);
      
    };

    const stopwatchConfiguration: string = this.localStorageService.get();
    this.stopwatch.restore(stopwatchConfiguration);

   }
}
