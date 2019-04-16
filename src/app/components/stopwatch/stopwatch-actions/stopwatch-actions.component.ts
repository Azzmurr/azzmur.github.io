import { Component, OnInit } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'tt-stopwatch-actions',
  templateUrl: './stopwatch-actions.component.html',
  styleUrls: ['./stopwatch-actions.component.scss']
})
export class StopwatchActionsComponent implements OnInit {
  stopwatch: Stopwatch;
  inProggres: boolean = false;

  constructor(private stopwatchService: StopwatchService) {
    this.stopwatch = stopwatchService.stopwatch;

   }

  ngOnInit() {
  }

  start() {
    this.stopwatch.start();
  }

  stop() {
    this.stopwatch.stop();
  }

  reset() {
    this.stopwatch.reset();
  }

}
