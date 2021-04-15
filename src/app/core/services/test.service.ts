import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private counterSubj = new BehaviorSubject(0);
  counter$ = this.counterSubj.asObservable();
  counter = 10;
  constructor() { }

  increment() {
    this.counter++;
    this.counterSubj.next(this.counter)
  }
}
