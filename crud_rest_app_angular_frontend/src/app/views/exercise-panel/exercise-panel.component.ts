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
}
