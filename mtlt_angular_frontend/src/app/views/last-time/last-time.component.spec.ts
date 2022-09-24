import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTimeComponent } from './last-time.component';

describe('LastTimeComponent', () => {
  let component: LastTimeComponent;
  let fixture: ComponentFixture<LastTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
