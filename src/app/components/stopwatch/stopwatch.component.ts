import { Component, OnInit } from '@angular/core';
import { stopwatcService } from 'src/app/services/stopwatch/stopwatch';
import { IFormatedTime } from 'src/app/interfaces/formated-time';


@Component({
  selector: 'tt-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  stopwatcService = stopwatcService;

  hours: string = "00";
  minutes: string = "00";
  seconds: string = "00";

  constructor() { }

  ngOnInit() {
    this.stopwatcService.time().subscribe({
      next: (time) => {
        this.hours = time.stopwatchTime.h;
        this.minutes = time.stopwatchTime.m;
        this.seconds = time.stopwatchTime.s;
      }
    });

    this.stopwatcService.start();

  }

}
