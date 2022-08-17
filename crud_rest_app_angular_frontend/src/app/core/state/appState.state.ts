import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { LoggedInUser } from '../models/loggedInUser.model';
import { DataHistoryService } from '../services/dataHistory.service';
import {
  AddExerciseToState,
  GetUserHistoryOnLogin,
  UpdateActiveExercises,
  UpdateLastAndBestTime,
  UpdateLoginStatus,
  UpdateUserHistoryOnLogin,
  UpdateZindexForMobile,
} from './appState.actions';

export interface AppStateModel {
  isUserLoggedIn?: boolean;
  username?: string;
  userData?: LoggedInUser;
  exerciseHistory?: any[] |null;
  activeExercises?: string[][];
  lastTime?: [];
  bestTime?: [];
  // [zIndexCurrent, zIndexLast, zIndexBest]
  zIndexMobilePane?: number[];
}

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    isUserLoggedIn: false,
    username: '',
    exerciseHistory: [],
    activeExercises: [],
    lastTime: [],
    bestTime: [],
    // [zIndexCurrent, zIndexLast, zIndexBest]
    zIndexMobilePane: [3, 1, 1],
  },
})
@Injectable()
export class AppState {
  constructor(
    private dataHistoryService: DataHistoryService,
    private http: HttpClient,
    private store: Store
  ) {}

  @Action(AddExerciseToState)
  addExerciseToState(
    ctx: StateContext<AppStateModel>,
    payload: { submittedExercise: any }
  ) {
    // console.log(payload.submittedExercise);
    // ctx.patchState({exerciseHistory: payload.submittedExercise})

  }

  @Action(UpdateActiveExercises)
  updateActiveExercises(
    ctx: StateContext<AppStateModel>,
    payload: { activeExercisesUI: string[][] }
  ) {
    let newData: string[][];
    newData = [...payload.activeExercisesUI];
    ctx.patchState({ activeExercises: newData });
  }

  @Action(UpdateLastAndBestTime)
  updateLastAndBestTime(
    ctx: StateContext<AppStateModel>,
    payload: { lastAndBestTimeArray: any[] }
  ) {
    let lastTimeArray: [];
    let bestTimeArray: [];
    if (payload.lastAndBestTimeArray) {
      lastTimeArray = payload.lastAndBestTimeArray[0];
      bestTimeArray = payload.lastAndBestTimeArray[1];
      ctx.patchState({ lastTime: lastTimeArray });
      ctx.patchState({ bestTime: bestTimeArray });
    }
  }

  @Action(UpdateZindexForMobile)
  updateZindexForMobile(
    ctx: StateContext<AppStateModel>,
    payload: { zIndexMobile: number[] }
  ) {
    ctx.patchState({ zIndexMobilePane: payload.zIndexMobile });
  }

  @Action(UpdateLoginStatus)
  updateLoginStatus(
    ctx: StateContext<AppStateModel>,
    payload: { isUserLoggedIn: boolean }
  ) {
    ctx.patchState({ isUserLoggedIn: payload.isUserLoggedIn });
    // Clear state/exerciseh history's on logout
    if (payload.isUserLoggedIn === false) {
      ctx.patchState({ username: '' });
      ctx.patchState({ isUserLoggedIn: false });
      ctx.patchState({exerciseHistory: []});
      ctx.patchState({activeExercises:[]});
      ctx.patchState({lastTime: []});
      ctx.patchState({bestTime:[]});
    }
  }



  // @Action(UpdateUsername)
  // updateUsername(ctx: StateContext<AppStateModel>) {
  //   let usernameService: string | undefined =
  //     this.dataHistoryService.getUserNameForDisplay();
  //   ctx.patchState({ username: usernameService });
  // }


  @Action(UpdateUserHistoryOnLogin)
  updateUserHistoryOnLogin(
    ctx: StateContext<AppStateModel>,
    payload: { loginResponse: any[] }
  ) {
    console.log(payload.loginResponse);
    let username:string = payload.loginResponse[0];
    let exerciseHistory: any[] | null = payload.loginResponse[1];
    ctx.patchState({ username: username });
    ctx.patchState({exerciseHistory: exerciseHistory})
    ctx.patchState({ isUserLoggedIn: true });
  }

  @Action(GetUserHistoryOnLogin)
  getUserHistoryOnLogin(
    ctx: StateContext<AppStateModel>,
    payload: { username: string }
  ) {
    // console.log('get in state');

    // HTTP GET REQUEST NEEDED
    this.http
      .get('http://localhost:4200/assets//userdb.json')
      .subscribe((data) => {
        let usersJsonHistory = Object.values(data);
        usersJsonHistory.forEach((userHistory) => {
          console.log(userHistory);

          if (
            userHistory.username.toLowerCase() ===
            payload.username.toLowerCase()
          ) {
            console.log('cha-CHING');

            // console.log(userHistory.exerciseHistory);
            console.log(userHistory.username);
            ctx.patchState({ isUserLoggedIn: true });
            // ctx.patchState({ username: userHistory.username });
            ctx.patchState({ username: 'Auto' });
            // ctx.patchState({ exerciseHistory: userHistory.exerciseHistory });
          }
        });
      });
  }
}
