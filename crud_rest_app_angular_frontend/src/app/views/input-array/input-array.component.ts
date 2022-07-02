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
  activeRow: number = 0;

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      date: new Date(),
      exerciseType: [''],
      exercise: [''],
      userArray: new FormArray([]),
    });
  }

  get userArray() {
    return <FormArray>this.exerciseForm.get('userArray');
  }

  addUser() {
    this.activeRow += 1;
    let newSet = this.formFactoryService.getSetForm();
    this.userArray.push(newSet);
  }

  removeUser(i: number) {
    this.activeRow -= 1;
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log('form submitted');
    console.log(this.exerciseForm.value);
  }
}
