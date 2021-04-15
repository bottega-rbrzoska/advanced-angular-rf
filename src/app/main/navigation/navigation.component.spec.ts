import { fakeAsync } from '@angular/core/testing';
import {
  byText,
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator';
import { AuthService } from 'src/app/core/services/auth.service';
import { authServiceMockFactory } from 'src/app/core/services/auth.service.mock';

import { NavigationComponent } from './navigation.component';
describe('NavigationComponent', () => {
    const __MOCKS__ = {
      authService: authServiceMockFactory(),
    };

    let __COMPONENT__: NavigationComponent;
    let __SPECTATOR__: Spectator<NavigationComponent>;

    const createComponent = createComponentFactory({
        component: NavigationComponent,
        shallow: true,
        detectChanges: true,
        providers: [{ provide: AuthService, useValue: __MOCKS__.authService }],
      });

    it('should show login btn when user is not logged in', fakeAsync(() => {
      //given
      __MOCKS__.authService.isLoggedIn$.next(false);
      __SPECTATOR__ = createComponent();

      //when
      const button = __SPECTATOR__.query(byText('Login'));

      // then
      expect(button).toExist();
    }));
});
