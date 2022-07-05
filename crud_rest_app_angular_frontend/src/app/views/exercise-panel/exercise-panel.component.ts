import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit {
  exerciseInput: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  addExerciseInput() {
    console.log('addExercise button clicked');
    this.exerciseInput.push(1);
    console.log(this.exerciseInput);
  }

  // get setArray() {
  //   return <FormArray>this.exerciseForm.get('setArray');
  // }

  removeExercise(i: number) {
    console.log(i);
    console.log(this.exerciseInput.splice(i, 1));

    // this.exerciseInput.remove(i);
  }
}
