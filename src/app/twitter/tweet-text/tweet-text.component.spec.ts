import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetTextComponent } from './tweet-text.component';

describe('TweetTextComponent', () => {
  let component: TweetTextComponent;
  let fixture: ComponentFixture<TweetTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
