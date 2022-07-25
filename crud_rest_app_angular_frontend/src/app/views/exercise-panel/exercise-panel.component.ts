import {
  AfterViewChecked,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdateActiveExercises } from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit, AfterViewChecked {
  @Output() exerciseIndex = new EventEmitter<string>();
  exerciseInput: number[] = [];
  exerciseInputIndex: number = 0;
  exerciseIndexToChild: string;
  exerciseArrayForState: string[][] = [];
  lengthOfArrayForState: number = this.exerciseArrayForState.length;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    let width = this.heightListener.nativeElement.offsetWidth;
    let height = this.heightListener.nativeElement.offsetHeight;

    console.log('Width:' + width);
    console.log('Height: ' + height);
  }
  @ViewChild('heightListener')
  heightListener: ElementRef;

  addExerciseInput() {
    this.exerciseInput.push(this.exerciseInputIndex);
    // console.log(this.exerciseInputIndex);

    this.exerciseInputIndex += 1;
  }

  updateStateActiveExercises(exercises: string[][]) {
    this.store.dispatch(new UpdateActiveExercises(exercises));
  }

  removeExercise(i: number) {
    console.log(i);
    this.exerciseInput.splice(i, 1);
    this.exerciseInputIndex -= 1;
    // Below updates state array
    this.exerciseArrayForState.pop();
    // console.log(`state-after-remove: ${this.exerciseArrayForState}`);
    this.updateStateActiveExercises(this.exerciseArrayForState);
  }

  receiveIterationExercise(exerIterationArray: any): void {
    this.lengthOfArrayForState = this.exerciseArrayForState.length;
    if (exerIterationArray[0] === String(this.lengthOfArrayForState)) {
    } else {
      this.exerciseArrayForState.push(exerIterationArray);
    }
    // console.log(`state after add/replace: ${this.exerciseArrayForState}`);
    this.updateStateActiveExercises(this.exerciseArrayForState);
  }

  public onResizeHandler(event: any): void {
    event.target.innerWidth;
    event.target.innerHeight;
    console.log(event.target.innerHeight);
  }
}
