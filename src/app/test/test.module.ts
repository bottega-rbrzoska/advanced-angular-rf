import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TestRoutingModule } from './test-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleService } from './example.service';
import { TestService } from '../core/services/test.service';

const MY_TOKEN = new InjectionToken<{ name: string }[]>('My token');
export const exampleFactory = (testService: TestService) => new ExampleService(testService)
@NgModule({
  declarations: [
    ExamplesComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ],
  providers: [
    TestService,
    { provide: MY_TOKEN, useValue: { name: 'blabla' }, multi: true  },
    { provide: MY_TOKEN, useValue: { name: 'xxxxxx' }, multi: true  },
    { provide: ExampleService, useFactory: exampleFactory, deps: [TestService] }]
})
export class TestModule { }
