import { Component, OnInit, Input } from '@angular/core';
import { Stopwatch } from 'src/app/classes/stopwatch/stopwatch';

@Component({
  selector: 'tt-stopwatch-laps',
  templateUrl: './stopwatch-laps.component.html',
  styleUrls: ['./stopwatch-laps.component.scss']
})
export class StopwatchLapsComponent implements OnInit {
  @Input() stopwatch: Stopwatch;

  constructor() { }

  ngOnInit() {
   
  }

}
