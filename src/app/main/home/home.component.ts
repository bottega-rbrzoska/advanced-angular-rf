import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/shared/notifications/notifications.service';

@Component({
  selector: 'rf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  pushNotification() {
    this.notificationService.pushNotification('hello from home!')
  }

}
