import { Injectable } from '@angular/core';

@Injectable()
export class DataHistoryService {
  currentExerciseListForComparison: string[] = [];

  getFoo(): void {
    return console.log('fopo');
  }

  updateCurrentExerciseListingForOtherComponents(exerciseId: string) {
    console.log(exerciseId);
  }
}
