import { Injectable } from '@angular/core';
import { FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryService {
  constructor(private fb: FormBuilder) {}

  // getExerceriseForm() {
  //   this.exerciseForm = this.fb.group({
  //   return this.fb.group({
  //     exerciseDate: new Date(),
  //     exerciseType: [''],
  //     exercise: [''],
  //     setArray: new FormArray([]),
  //   });
  // }

  getSetForm() {
    return this.fb.group({
      setNumber: [''],
      weight: ['', [Validators.required, Validators.maxLength(3)]],
      reps: ['', [Validators.required, Validators.max(200)]],
      volume: ['', [Validators.required]],
    });
  }

  // get weight() {
  //   return this.setForm.controls['weight'];
  // }
}
