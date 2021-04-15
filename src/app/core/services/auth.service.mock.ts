import { BehaviorSubject } from 'rxjs'

export function authServiceMockFactory() {
  const spyObj = jasmine.createSpyObj('AuthService', {
    login() {},
    logout() {}
  })

  spyObj.isLoggedIn$ = new BehaviorSubject(false);
  return spyObj;
}
