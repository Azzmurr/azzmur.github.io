import { Component, OnInit } from '@angular/core';
import { StopwatchService, StopwatchServiceSingelton } from 'src/app/services/stopwatch/stopwatch';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  stopwatch: Stopwatch = new Stopwatch();
  stopwatchService: StopwatchService = StopwatchServiceSingelton.getInstanse(this.stopwatch);

  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";

  constructor() { }

  ngOnInit() {
    this.stopwatchService.time().subscribe({
      next: time => { 
        this.hours = time.stopwatchTime.h;
        this.minutes = time.stopwatchTime.m;
        this.seconds = time.stopwatchTime.s;

       }
    });

}

}
