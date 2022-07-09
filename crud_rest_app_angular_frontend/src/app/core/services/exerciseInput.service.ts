import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryService {
  constructor(private fb: FormBuilder) {}

  getSetForm() {
    return this.fb.group({
      setNumber: [''],
      weight: ['', [Validators.required, Validators.maxLength(3)]],
      reps: ['', [Validators.required, Validators.max(200)]],
      volume: ['', [Validators.required]],
    });
  }
}
