import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit {
  exerciseInput: number[] = [];
  exerciseInputIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addExerciseInput() {
    // console.log('addExercise button clicked');
    this.exerciseInput.push(this.exerciseInputIndex);
    this.exerciseInputIndex += 1;
    // console.log(this.exerciseInput);
  }

  // get setArray() {
  //   return <FormArray>this.exerciseForm.get('setArray');
  // }

  removeExercise(i: number) {
    console.log(i);
    this.exerciseInput.splice(i, 1);
    this.exerciseInputIndex -= 1;
  }
}
