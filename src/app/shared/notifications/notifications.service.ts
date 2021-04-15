import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationsService {

  private notificationsSubj = new Subject<string>();
  notifications$ = this.notificationsSubj.asObservable();
  constructor() { }

  pushNotification(msg: string) {
    this.notificationsSubj.next(msg)
  }
}
