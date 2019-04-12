import { Component, OnInit, Input } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch-actions',
  templateUrl: './stopwatch-actions.component.html',
  styleUrls: ['./stopwatch-actions.component.scss']
})
export class StopwatchActionsComponent implements OnInit {
  @Input() stopwatch: Stopwatch;

  constructor() { }

  ngOnInit() {
  }

}
