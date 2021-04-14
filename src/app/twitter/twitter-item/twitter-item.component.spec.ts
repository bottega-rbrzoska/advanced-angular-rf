import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterItemComponent } from './twitter-item.component';

describe('TwitterItemComponent', () => {
  let component: TwitterItemComponent;
  let fixture: ComponentFixture<TwitterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
