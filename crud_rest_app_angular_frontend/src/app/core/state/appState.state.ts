import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import {
  UpdateActiveExercises,
  UpdateLastAndBestTime,
  UpdateLoginStatus,
  UpdateZindexForMobile,
} from './appState.actions';

export interface AppStateModel {
  isUserLoggedIn?: boolean;
  exerciseHistory?: [];
  activeExercises?: string[][];
  lastTime?: [];
  bestTime?: [];
  // [zIndexCurrent, zIndexLast, zIndexBest]
  zIndexMobilePane?: number[];
  iterationMaxHeights?: [][];
}

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    isUserLoggedIn: true,
    exerciseHistory: [],
    activeExercises: [],
    lastTime: [],
    bestTime: [],
    // [zIndexCurrent, zIndexLast, zIndexBest]
    zIndexMobilePane: [3, 1, 1],
    iterationMaxHeights: [],
  },
})
@Injectable()
export class AppState {
  @Action(UpdateActiveExercises)
  updateActiveExercises(
    ctx: StateContext<AppStateModel>,
    payload: { activeExercisesUI: string[][] }
  ) {
    let newData: string[][];
    newData = [...payload.activeExercisesUI];
    ctx.setState({ activeExercises: newData });
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
      ctx.setState({ lastTime: lastTimeArray });
      ctx.setState({ bestTime: bestTimeArray });
    }
  }

  @Action(UpdateZindexForMobile)
  updateZindexForMobile(
    ctx: StateContext<AppStateModel>,
    payload: { zIndexMobile: number[] }
  ) {
    ctx.setState({ zIndexMobilePane: payload.zIndexMobile });
  }

  @Action(UpdateLoginStatus)
  updateLoginStatus(
    ctx: StateContext<AppStateModel>,
    payload: { isUserLoggedIn: boolean }
  ) {
    ctx.setState({ isUserLoggedIn: payload.isUserLoggedIn });
  }
}
