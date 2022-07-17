// export class getExerciseHistory {
//   static readonly type = '[ExerciseHistory] Get Exercise History';
//   constructor(public exerciseHistory: any) {}
// }

export class UpdateActiveExercises {
  static readonly type = '[ExerciseList] Update Active Exercises';
  constructor(public activeExercisesUI: string[][]) {}
}
