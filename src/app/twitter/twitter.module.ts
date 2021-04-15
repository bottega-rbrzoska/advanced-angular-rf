import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterRoutingModule } from './twitter-routing.module';
import { TwitterListComponent } from './twitter-list/twitter-list.component';
import { TwitterItemComponent } from './twitter-item/twitter-item.component';
import { TweetImgComponent } from './tweet-img/tweet-img.component';
import { TweetTextComponent } from './tweet-text/tweet-text.component';


@NgModule({
  declarations: [
    TwitterListComponent,
    TwitterItemComponent,
    TweetImgComponent,
    TweetTextComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule
  ]
})
export class TwitterModule { }
