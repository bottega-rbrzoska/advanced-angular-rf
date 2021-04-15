import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestAttrDirective } from './directives/test-attr.directive';
import { TestStrDirective } from './directives/test-str.directive';
import { SelectableDirective } from './directives/selectable.directive';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    TestStrDirective,
    TestAttrDirective,
    SelectableDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    TestAttrDirective,
    TestStrDirective,
    SelectableDirective,
    MatCardModule
  ]
})
export class SharedModule { }
