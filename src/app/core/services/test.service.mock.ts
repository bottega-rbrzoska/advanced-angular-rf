import { BehaviorSubject } from 'rxjs'
import { TestService } from './test.service';

export function testServiceMockFactory() {

  const mock: TestService = {

  }

  const spyObj = jasmine.createSpyObj('TestService', {
    increment(): void {}
  })

  spyObj.counter$ = new BehaviorSubject(0);
}
