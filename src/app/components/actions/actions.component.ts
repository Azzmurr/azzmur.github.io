import { Component, OnInit } from '@angular/core';
import { stopwatcService } from 'src/app/services/stopwatch/stopwatch';

@Component({
  selector: 'tt-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  stopwatchService;

  constructor() { }

  ngOnInit() {
    this.stopwatchService = stopwatcService;
  }
}
