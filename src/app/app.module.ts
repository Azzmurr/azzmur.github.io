import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';
import { StopwatchActionsComponent } from './components/stopwatch/stopwatch-actions/stopwatch-actions.component';
import { StopwatchLapsComponent } from './components/stopwatch/stopwatch-laps/stopwatch-laps.component';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { StopwatchService } from './services/stopwatch.service';

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
    FormsModule,
    MaterialModule
  ],
  providers: [StopwatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
