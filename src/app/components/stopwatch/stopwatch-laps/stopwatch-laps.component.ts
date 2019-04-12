import { Component, OnInit, Input } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { StopwatchService, StopwatchServiceSingelton } from 'src/app/services/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch-laps',
  templateUrl: './stopwatch-laps.component.html',
  styleUrls: ['./stopwatch-laps.component.scss']
})
export class StopwatchLapsComponent implements OnInit {
  @Input() stopwatch: Stopwatch;
  stopwatchService: StopwatchService;

  constructor() { }

  ngOnInit() {
    this.stopwatchService = StopwatchServiceSingelton.getInstanse(this.stopwatch);
    this.stopwatchService.time().subscribe(time => {
      this.stopwatch.activeLap.formated = time.activeLapTime;
    })
  }

}
