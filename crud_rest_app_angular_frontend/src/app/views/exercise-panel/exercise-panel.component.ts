import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit {
  @Output() exerciseIndex = new EventEmitter<string>();
  exerciseInput: number[] = [];
  exerciseInputIndex: number = 0;
  exerciseIndexToChild: string;
  exerciseArrayForState: string[][] = [];
  lengthOfArrayForState: number = this.exerciseArrayForState.length;
  constructor() {}

  ngOnInit(): void {}

  addExerciseInput() {
    this.exerciseInput.push(this.exerciseInputIndex);
    // console.log(this.exerciseInputIndex);

    this.exerciseInputIndex += 1;
  }

  removeExercise(i: number) {
    console.log(i);
    this.exerciseInput.splice(i, 1);
    this.exerciseInputIndex -= 1;
    // Below updates state array
    this.exerciseArrayForState.pop();
    console.log(`state-after-remove: ${this.exerciseArrayForState}`);
  }
  indexSend(i: number) {
    // console.log(i);
    // console.log(typeof i);
    // let indexAsString = 'did they receive index';
    // console.log('index send fired');
    // this.exerciseIndexToChild = indexAsString;
    // this.exerciseIndex.emit(this.exerciseIndexToChild);
  }

  receiveIterationExercise(exerIterationArray: any): void {
    this.lengthOfArrayForState = this.exerciseArrayForState.length;
    if (exerIterationArray[0] === String(this.lengthOfArrayForState)) {
    } else {
      this.exerciseArrayForState.push(exerIterationArray);
    }
    console.log(`state after add/replace: ${this.exerciseArrayForState}`);
  }

  generateExerciseListArray() {}
}
