import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryService {
  constructor(private fb: FormBuilder) {}

  getSetForm() {
    return this.fb.group({
      setNumber: [''],
      weight: [''],
      reps: [''],
    });
  }
}
