import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExerciseSetGroupComponent } from './input-exercise-set-group.component';

describe('InputArrayComponent', () => {
  let component: InputExerciseSetGroupComponent;
  let fixture: ComponentFixture<InputExerciseSetGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputExerciseSetGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputExerciseSetGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
