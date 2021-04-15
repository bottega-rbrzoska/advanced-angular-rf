import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'rf-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.scss']
})
export class NotificationContainerComponent implements OnInit {

  componentFactory: ComponentFactory<NotificationComponent>;
  @ViewChild('viewContainer', { static: true, read: ViewContainerRef }) viewContainer: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver, private notificationService: NotificationsService) { }

  ngOnInit(): void {

    this.componentFactory = this.cfr.resolveComponentFactory(NotificationComponent);

    this.notificationService.notifications$.subscribe(msg => {
      const compRef =  this.viewContainer.createComponent(this.componentFactory);
      compRef.instance.message = msg;
      setTimeout(() => {
        compRef.destroy();
      }, 5000)
    })

  }

}
