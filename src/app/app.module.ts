import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { MatButtonModule } from '@angular/material/button';
import { StopwatchActionsComponent } from './components/stopwatch/stopwatch-actions/stopwatch-actions.component';
import { StopwatchLapsComponent } from './components/stopwatch/stopwatch-laps/stopwatch-laps.component';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    StopwatchActionsComponent,
    StopwatchLapsComponent,
    StopwatchActionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
