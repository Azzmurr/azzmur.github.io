import { Injectable } from '@angular/core';
import { Stopwatch } from '../classes/stopwatch/stopwatch';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  save(stopwatch: Stopwatch) {
    localStorage.setItem("stopwatch", JSON.stringify(stopwatch));

  }

  get(): string {
    return localStorage.getItem("stopwatch");
    
  }

  constructor() { }
}
