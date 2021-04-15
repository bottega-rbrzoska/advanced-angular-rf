import { Component, OnInit } from '@angular/core';
import { BaseTwitterItem } from '../BaseTwitterItem.class';

@Component({
  selector: 'rf-tweet-text',
  templateUrl: './tweet-text.component.html',
  styleUrls: ['./tweet-text.component.scss'],
  providers: [{ provide: BaseTwitterItem, useExisting: TweetTextComponent }]
})
export class TweetTextComponent implements OnInit, BaseTwitterItem {

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    console.log('like this text!')
  }

}
