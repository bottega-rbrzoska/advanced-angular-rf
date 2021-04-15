import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExamplesComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export class TestModule { }
