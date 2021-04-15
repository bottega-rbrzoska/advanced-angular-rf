import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
