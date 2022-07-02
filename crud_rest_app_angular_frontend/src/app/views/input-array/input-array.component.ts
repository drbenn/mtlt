import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
})
export class InputArrayComponent implements OnInit {
  exerciseForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      date: new Date(),
      exerciseType: [''],
      exercise: [''],
      setArray: new FormArray([]),
    });
  }

  get setArray() {
    return <FormArray>this.exerciseForm.get('setArray');
  }

  addSet() {
    let newSet = this.formFactoryService.getSetForm();
    this.setArray.push(newSet);
  }

  removeUser(i: number) {
    this.setArray.removeAt(i);
  }

  onSubmit() {
    console.log('form submitted');
    console.log(this.exerciseForm.value);
  }
}
