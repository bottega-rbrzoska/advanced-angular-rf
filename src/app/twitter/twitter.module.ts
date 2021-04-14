import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterListComponent } from './twitter-list/twitter-list.component';
import { TwitterItemComponent } from './twitter-item/twitter-item.component';


@NgModule({
  declarations: [
    TwitterListComponent,
    TwitterItemComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule
  ]
})
export class TwitterModule { }
