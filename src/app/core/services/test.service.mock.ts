import { BehaviorSubject } from 'rxjs'

export function testServiceMockFactory() {
  const spyObj = jasmine.createSpyObj('TestService', {
    increment(): void {}
  })

  spyObj.counter$ = new BehaviorSubject(0);
}
