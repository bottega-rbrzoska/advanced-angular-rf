import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { BaseTwitterItem } from '../BaseTwitterItem.class';

@Component({
  selector: 'rf-twitter-item',
  templateUrl: './twitter-item.component.html',
  styleUrls: ['./twitter-item.component.scss']
})
export class TwitterItemComponent implements OnInit, AfterContentInit {

  @ContentChild(BaseTwitterItem) tweetItem: BaseTwitterItem;
  constructor() { }

  ngOnInit(): void {
  }

  likeItem() {
    this.tweetItem.like();
  }

  ngAfterContentInit() {
    console.log(this.tweetItem)
  }

}
