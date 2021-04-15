import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';
import { NotificationsService } from './notifications.service';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationContainerComponent
  ]
})
export class NotificationsModule {
  static forRoot(): ModuleWithProviders<NotificationsModule> {
    return {
      ngModule: NotificationsModule,
      providers: [NotificationsService]
    }
  }
 }
