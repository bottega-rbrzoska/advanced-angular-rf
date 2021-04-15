import { notificationsMockFactory } from 'src/app/test-utils/notifications.mock';
import { HomeComponent } from './home.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { NotificationsService } from 'dist/rf-lib';
import { MatButtonModule } from '@angular/material/button';

fdescribe('HomeComponent', () => {
  const __MOCKS__ = {
    notificationService: notificationsMockFactory()
  };
  let __COMPONENT__: HomeComponent;


  describe('isolated test', () => {



    const createComponent = () => {
      __COMPONENT__ = new HomeComponent(__MOCKS__.notificationService);
    }

    beforeEach(() => {
      createComponent();
    })

    it('Should call pushNotification from notificationService when calling notify', () => {
      // when
      __COMPONENT__.notify();
      // then
      expect(__MOCKS__.notificationService.pushNotification).toHaveBeenCalled()
    })

  })
  describe('shallow test', () => {

   let __SPECTATOR__: Spectator<HomeComponent>;
   const createComponent = createComponentFactory({
     component: HomeComponent,
     shallow: true,
     providers: [{
       provide: NotificationsService, useValue: __MOCKS__.notificationService
     }],
     imports: [MatButtonModule]
   })

  })
});
