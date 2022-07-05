import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
})
export class InputArrayComponent implements OnInit {
  exerciseForm: FormGroup = new FormGroup({});

  setAdded_activateTotalVolDisplay: boolean = false;
  volumeForSet: string = '';
  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      exerciseDate: new Date(),
      exerciseType: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.minLength(10),
        ],
      ],
      exercise: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.minLength(10),
        ],
      ],
      setArray: new FormArray([]),
    });
  }

  get setArray() {
    return <FormArray>this.exerciseForm.get('setArray');
  }

  addSet() {
    this.setAdded_activateTotalVolDisplay = true;
    let newSet = this.formFactoryService.getSetForm();
    this.setArray.push(newSet);
    console.log(this.exerciseForm);
  }

  deleteSet() {
    console.log('delete Exercise');
  }

  removeSet(i: number) {
    this.setArray.removeAt(i);
  }

  receiveSetVolume(textFromInput: string) {
    console.log(this.setAdded_activateTotalVolDisplay);
    if (textFromInput !== 'NaN') {
      this.volumeForSet = textFromInput;
      this.setAdded_activateTotalVolDisplay = true;
      console.log(this.setAdded_activateTotalVolDisplay);
      console.log(this.volumeForSet);
    }
  }

  onSubmit() {
    console.warn('form submitted');

    console.log(this.exerciseForm.value);
  }

  closeExercise() {
    console.log('exercise closing');
    alert(
      'Are you really done? This will also remove the exercise for editing'
    );
  }
}
