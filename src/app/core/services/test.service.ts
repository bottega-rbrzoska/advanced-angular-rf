import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private counterSubj = new BehaviorSubject(0);
  counter$ = this.counterSubj.asObservable();
  counter = 10;
  constructor(private http: HttpClient) { }

  increment() {
    this.counter++;
    this.counterSubj.next(this.counter)
  }

  getCategories() {
    return this.http.get<string[]>(environment.apiUrl + '/categories')
  }
}
