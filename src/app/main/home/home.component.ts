import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'projects/rf-lib/src/public-api';

@Component({
  selector: 'rf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  notify() {
    this.notificationService.pushNotification('hello from home!')
  }

}
