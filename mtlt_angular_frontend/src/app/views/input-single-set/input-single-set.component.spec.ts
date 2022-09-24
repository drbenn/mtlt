import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSingleSetComponent } from './input-single-set.component';

describe('InputComponent', () => {
  let component: InputSingleSetComponent;
  let fixture: ComponentFixture<InputSingleSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSingleSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSingleSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
