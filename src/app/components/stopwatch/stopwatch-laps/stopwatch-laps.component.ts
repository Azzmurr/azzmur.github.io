import { Component, OnInit } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';
import { MatExpansionPanel } from '@angular/material/expansion';
import { StopwatchLap } from 'src/app/classes/stopwatch-lap/stopwatch-lap';
import { StopwatchService } from 'src/app/services/stopwatch.service';

@Component({
  selector: 'tt-stopwatch-laps',
  templateUrl: './stopwatch-laps.component.html',
  styleUrls: ['./stopwatch-laps.component.scss']
})
export class StopwatchLapsComponent implements OnInit {
  stopwatch: Stopwatch;

  constructor(private stopwatchService: StopwatchService) {
    this.stopwatch = stopwatchService.stopwatch;
    
   }

  ngOnInit() {
    
  }

  startNewLap(matExpansionPanel: MatExpansionPanel) {
    matExpansionPanel.close();
    this.stopwatch.newLap();
  }

  startThisLap(matExpansionPanel: MatExpansionPanel, stopwatchLap: StopwatchLap) {
    matExpansionPanel.close();
    this.stopwatch
      .stop()
      .continiueLap(stopwatchLap.id);
  }

}
