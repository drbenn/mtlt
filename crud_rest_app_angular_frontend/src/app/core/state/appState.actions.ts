// export class getExerciseHistory {
//   static readonly type = '[ExerciseHistory] Get Exercise History';
//   constructor(public exerciseHistory: any) {}
// }

export class UpdateUserHistoryOnLogin {
  static readonly type = '[UserLogin] Set User State on Login';
  constructor(public loginResponse: any[]) {}
}

export class AddExerciseToState {
  static readonly type= '[ExerciseHistory] Update State with completed exercise';
  constructor(public submittedExercise: any) {}
}

export class GetUserHistoryOnLogin {
  static readonly type = '[UserLogin] Get and Set User Information on Login';
  constructor(public username: string) {}
}

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

// export class UpdateUsername {
//   static readonly type = '[UserData] Update username on login for display';
// }
