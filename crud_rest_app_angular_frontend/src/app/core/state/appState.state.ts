import { Injectable } from '@angular/core';
import {
  Action,
  Actions,
  NgxsOnInit,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { CurrentExercisesService } from '../services/currentExercises.service';
import {
  UpdateActiveExercises,
  UpdateLastAndBestTime,
} from './appState.actions';

export interface AppStateModel {
  exerciseHistory?: [];
  activeExercises?: string[][];
  lastTime?: [];
  bestTime?: [];
}

@State<AppStateModel>({
  name: 'appState',
  defaults: {
    exerciseHistory: [],
    activeExercises: [],
    lastTime: [],
    bestTime: [],
  },
})
@Injectable()
export class AppState {
  @Action(UpdateActiveExercises)
  updateActiveExercises(
    ctx: StateContext<AppStateModel>,
    payload: { activeExercisesUI: string[][] }
    // action: UpdateActiveExercises
  ) {
    let newData: string[][];
    // const { activeExercises } = action;
    // console.log('action in state triggered');
    // console.log('payload');
    // console.log(payload.activeExercisesUI);
    newData = [...payload.activeExercisesUI];
    // console.log(activeExercises);

    // const state = ctx.getState();

    ctx.setState({ activeExercises: newData });
  }

  @Action(UpdateLastAndBestTime)
  updateLastAndBestTime(
    ctx: StateContext<AppStateModel>,
    payload: { lastAndBestTimeArray: any[] }
  ) {
    // console.log('last and best triggered in state');
    // console.log('last time');
    let lastTimeArray: [];
    let bestTimeArray: [];
    if (payload.lastAndBestTimeArray) {
      lastTimeArray = payload.lastAndBestTimeArray[0];
      // console.log(lastTimeArray);

      bestTimeArray = payload.lastAndBestTimeArray[1];
      ctx.setState({ lastTime: lastTimeArray });
      ctx.setState({ bestTime: bestTimeArray });
    }
  }
}

// @State<AppStateModel>({
//   name: 'appState',
//   defaults: {
//     exerciseHistory: [],
//     activeExercises: [],
//   },
// })
// @Injectable()
// export class AppState implements NgxsOnInit {
//   constructor(private currentExercisesService: CurrentExercisesService) {}

//   @Selector()
//   static filteredExerciseHistory(state: AppStateModel) {
//     return state.exerciseHistory.filter((savedExercises) => {
//       let selectedExercises = state.activeExercises;
//       return true;
//     });
//   }

//   ngxsOnInit(ctx?: StateContext<AppStateModel>) {
//     this.currentExercisesService
//       .getExerciseHistory()
//       .subscribe((_exercises) =>
//         ctx?.dispatch(new GetExerciseHistory(_exercises))
//       );
//     this.currentExercisesService
//       .getActiveExercises()
//       .subscribe((_activeExercises) => {
//         ctx?.dispatch(new GetActiveExercises(_activeExercises));
//       });
//   }

//   @Actions(GetExerciseHistory)
//   getExerciseHistory(
//     ctx: StateContext<AppStateModel>,
//     payload: { exerciseHistory: [] }
//   );

//   @Actions(GetActiveExercises)
//   getActiveExercises(
//     ctx: StateContext<AppStateModel>,
//     payload: { exercises: [] }
//   ) {
//     ctx.patchState({ exercises: payload.exercises });
//   }
// }
