import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputArrayComponent } from './input-array.component';

describe('InputArrayComponent', () => {
  let component: InputArrayComponent;
  let fixture: ComponentFixture<InputArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
