import { Component, OnInit } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'tt-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  stopwatch: Stopwatch;

  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";

  constructor(private stopwatchService: StopwatchService) {
    this.stopwatch = stopwatchService.stopwatch;

   }

  ngOnInit() {
    this.stopwatch.time$.subscribe({
      next: (time: {h: string, m: string, s: string}) => { 
        this.hours = time.h;
        this.minutes = time.m;
        this.seconds = time.s;

       }
    });

}

}
