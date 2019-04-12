import { Component, OnInit } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  stopwatch: Stopwatch = new Stopwatch();

  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";

  constructor() { }

  ngOnInit() {
    this.stopwatch.time().subscribe({
      next: (time: {h: string, m: string, s: string}) => { 
        this.hours = time.h;
        this.minutes = time.m;
        this.seconds = time.s;

       }
    });

}

}
