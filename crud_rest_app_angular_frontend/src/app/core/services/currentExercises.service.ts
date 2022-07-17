import { Injectable } from '@angular/core';

@Injectable()
export class CurrentExercisesService {
  getExerciseHistory() {
    console.log('pulling exercise history');
  }

  getActiveExercises() {
    console.log('getting active exercises');
  }
}
