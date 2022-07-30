// export class getExerciseHistory {
//   static readonly type = '[ExerciseHistory] Get Exercise History';
//   constructor(public exerciseHistory: any) {}
// }

export class UpdateActiveExercises {
  static readonly type = '[ExerciseList] Update Active Exercises';
  constructor(public activeExercisesUI: string[][]) {}
}

export class UpdateLastAndBestTime {
  static readonly type = '[ExerciseHistory] Update Last and Best Exercises';
  constructor(public lastAndBestTimeArray: any[]) {}
}

export class UpdateZindexForMobile {
  static readonly type =
    '[MobileView] Z index to show appropriate pane in narrow mobile view';
  constructor(public zIndexMobile: number[]) {}
}

export class UpdateLoginStatus {
  static readonly type =
    '[UserStatus] Update login status determining view of application';
  constructor(public isUserLoggedIn: boolean) {}
}
