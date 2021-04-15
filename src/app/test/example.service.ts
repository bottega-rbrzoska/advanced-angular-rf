import { Injectable } from '@angular/core';
import { TestService } from '../core/services/test.service';

@Injectable()
export class ExampleService {

  constructor( private testService: TestService) { }
}
