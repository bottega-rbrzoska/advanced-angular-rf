import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsService } from './notifications.service';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule
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
