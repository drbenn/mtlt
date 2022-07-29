import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  UpdateActiveExercises,
  UpdateZindexForMobile,
} from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-exercise-panel',
  templateUrl: './exercise-panel.component.html',
  styleUrls: ['./exercise-panel.component.scss'],
})
export class ExercisePanelComponent implements OnInit {
  @Output() exerciseIndex = new EventEmitter<string>();
  zIndexArrayForMobileCurrent: number;
  exerciseInput: number[] = [];
  exerciseInputIndex: number = 0;
  exerciseIndexToChild: string;
  exerciseArrayForState: string[][] = [];
  lengthOfArrayForState: number = this.exerciseArrayForState.length;
  exercisePanelCurrentHeight: number;
  exercisePanelIteration: number;
  public innerWidth: any;
  constructor(private store: Store) {}

  ngOnInit(): void {
    let zIndexMobilePane$: Observable<number[]> = this.store.select(
      (state) => state.appState.zIndexMobilePane
    );

    zIndexMobilePane$.subscribe((_zIndexMobilePane: number[]) => {
      console.log(_zIndexMobilePane);
      this.zIndexArrayForMobileCurrent = _zIndexMobilePane[0];
      console.log(`current z: ${this.zIndexArrayForMobileCurrent}`);
    });
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  addExerciseInput() {
    this.exerciseInput.push(this.exerciseInputIndex);

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

  receiveZIndexForCurrentTime(zIndexArray: any): void {
    console.log(zIndexArray);
  }

  zIndexToBestTime() {
    console.log('best test');
    // [zIndexCurrent, zIndexLast, zIndexBest]
    let bestTimeZIndex: number[] = [1, 1, 3];
    this.store.dispatch(new UpdateZindexForMobile(bestTimeZIndex));
  }
  zIndexToLastTime() {
    console.log('last test');
    // [zIndexCurrent, zIndexLast, zIndexBest]
    let lastTimeZIndex: number[] = [1, 3, 1];
    this.store.dispatch(new UpdateZindexForMobile(lastTimeZIndex));
  }
}
