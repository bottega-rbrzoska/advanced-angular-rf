import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactory, ComponentFactoryResolver, EmbeddedViewRef, Inject, Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationComponent } from './notification/notification.component';

@Injectable()
export class NotificationsService {

  private containerElement: HTMLElement;
  private notificationsSubj = new Subject<string>();
  componentFactory: ComponentFactory<NotificationComponent>;
  notifications$ = this.notificationsSubj.asObservable();
  constructor(private injector: Injector, @Inject(DOCUMENT) private document: any, private appRef: ApplicationRef, cfr: ComponentFactoryResolver) {

    this.componentFactory = cfr.resolveComponentFactory(NotificationComponent);
    this.createContainer();
  }

  pushNotification(msg: string) {
    const compRef = this.componentFactory.create(this.injector)
    compRef.instance.message = msg;
    console.log(compRef)
    this.appRef.attachView(compRef.hostView);
    this.containerElement.appendChild((compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement)

    setTimeout(() => {
      compRef.destroy()
    }, 5000);
  }

  private createContainer() {
    this.containerElement = this.document.createElement('div')
    this.containerElement.setAttribute('style', 'position: fixed; bottom: 10px; right: 10px');

    this.document.body.appendChild(this.containerElement);
  }
}
