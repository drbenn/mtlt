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

  /**
   * Indicates if there is at least 1 last time in history,
   * If so, Last Time/Best Time/Current Time switches will appear
   * to change between the views while in mobile view
   * @param iterationNumber - ex 1,2 or 3
   */
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
