import { Component, OnInit } from '@angular/core';
import { stopwatcService } from 'src/app/services/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch-laps',
  templateUrl: './stopwatch-laps.component.html',
  styleUrls: ['./stopwatch-laps.component.scss']
})
export class StopwatchLapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    stopwatcService.time().subscribe({
      next: time => {
        
      }
    })

  }

}
