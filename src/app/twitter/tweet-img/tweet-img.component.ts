import { Component, OnInit } from '@angular/core';
import { BaseTwitterItem } from '../BaseTwitterItem.class';

@Component({
  selector: 'rf-tweet-img',
  templateUrl: './tweet-img.component.html',
  styleUrls: ['./tweet-img.component.scss'],
  providers: [{ provide: BaseTwitterItem, useExisting: TweetImgComponent }]
})
export class TweetImgComponent implements OnInit, BaseTwitterItem {

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    console.log('like this image!')
  }

}
