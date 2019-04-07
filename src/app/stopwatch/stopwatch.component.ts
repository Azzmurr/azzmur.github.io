import { Component, OnInit, Input } from '@angular/core';
import { Stopwatch } from '../stopwatch';


@Component({
  selector: 'tt-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  @Input() stopwatch: Stopwatch;

  hours: string;
  minutes: string;
  seconds: string;

  constructor() { }

  ngOnInit() {
    this.stopwatch.time.subscribe(time => {
      this.hours = time.h;
      this.minutes = time.m;
      this.seconds = time.s;
    });

    this.stopwatch.start();

  }

}
