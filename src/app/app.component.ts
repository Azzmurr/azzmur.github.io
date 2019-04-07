import { Component } from '@angular/core';
import { Stopwatch } from './stopwatch';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stopwatch: Stopwatch = new Stopwatch();


}
