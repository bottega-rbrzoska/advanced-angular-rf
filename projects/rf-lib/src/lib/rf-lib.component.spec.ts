import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfLibComponent } from './rf-lib.component';

describe('RfLibComponent', () => {
  let component: RfLibComponent;
  let fixture: ComponentFixture<RfLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
