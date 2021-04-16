import { BehaviorSubject, Observable, of } from 'rxjs'
import { OnlySelectedTypePropsFromClass,OnlySelectedTypeOptionalPropsFromClass } from 'src/app/type-utils/custom-type-selectors';
import { TestService } from './test.service';

export function testServiceMockFactory() {
  let mock: OnlySelectedTypePropsFromClass<TestService, Function> & OnlySelectedTypeOptionalPropsFromClass<TestService, Observable<any>>= {
    getCategories() { return of()},
    increment() {},

  }

  const spyObj = jasmine.createSpyObj('TestService', {
    increment(): void {}
  })

  spyObj.counter$ = new BehaviorSubject(0);
}
