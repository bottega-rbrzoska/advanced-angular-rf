import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotificationsModule } from './notifications/notifications.module';
import { RfLibComponent } from './rf-lib.component';

@NgModule({
  declarations: [
    RfLibComponent
  ],
  imports: [],
  exports: [
    RfLibComponent
  ]
})
export class RfLibModule {
  static forRoot(): ModuleWithProviders<RfLibModule> {
    return {
      ngModule: RfLibModule,
      providers: [...NotificationsModule.forRoot().providers]
    }
  }
 }
