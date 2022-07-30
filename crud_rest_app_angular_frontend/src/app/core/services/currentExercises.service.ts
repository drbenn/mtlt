import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentExercisesService {
  private currentNumberOfLastTimeIterationsDisplayed =
    new BehaviorSubject<number>(0);
  currentLastTimeIterations =
    this.currentNumberOfLastTimeIterationsDisplayed.asObservable();

  changeLastTimeIteration(iterationNumber: number) {
    this.currentNumberOfLastTimeIterationsDisplayed.next(iterationNumber);
  }

  getExerciseHistory() {
    console.log('pulling exercise history');
  }

  getActiveExercises() {
    console.log('getting active exercises');
  }
}
