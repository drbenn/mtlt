import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoggedInUser } from 'src/app/core/models/loggedInUser.model';
import { DataHistoryService } from 'src/app/core/services/dataHistory.service';

@Component({
  selector: 'app-last-time',
  templateUrl: './last-time.component.html',
  styleUrls: ['./last-time.component.scss'],
})

// component generated on selection of exercise/exercise variation
//  ALSO MUST BE DESTROYED  Rerun if changed
export class LastTimeComponent implements OnInit {
  lastTimeArrayForDisplay: any[] = [];
  testUser: LoggedInUser = {
    username: 'User1',
    joinDate: new Date(),
    exerciseHistory: [
      {
        exerciseDate: '2022-07-10T21:27:55.920Z',
        exerciseType: 'Barbell',
        exercise: 'Squat(Back)',
        bodyweightVariation: '',
        setArray: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10,
            volume: 1350,
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8,
            volume: 1240,
          },
          {
            setNumber: 3,
            weight: 185,
            reps: 6,
            volume: 1110,
          },
        ],
        exerciseVolume: 2400,
      },
      {
        exerciseDate: '2021-07-10T21:27:55.920Z',
        exerciseType: 'Barbell',
        exercise: 'Squat(Back)',
        bodyweightVariation: '',
        setArray: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10,
            volume: 1350,
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8,
            volume: 1240,
          },
          {
            setNumber: 3,
            weight: 205,
            reps: 6,
            volume: 1230,
          },
        ],
        exerciseVolume: 2520,
      },
      {
        exerciseDate: '2019-07-10T21:27:55.920Z',
        exerciseType: 'Barbell',
        exercise: 'Squat(Back)',
        bodyweightVariation: '',
        setArray: [
          {
            setNumber: 1,
            weight: 135,
            reps: 10,
            volume: 1350,
          },
          {
            setNumber: 2,
            weight: 155,
            reps: 8,
            volume: 1240,
          },
          {
            setNumber: 3,
            weight: 205,
            reps: 10,
            volume: 2050,
          },
        ],
        exerciseVolume: 4640,
      },
      {
        exerciseDate: '2022-07-10T21:38:15.159Z',
        exerciseType: 'Machine',
        exercise: 'Chest Press',
        bodyweightVariation: '',
        setArray: [
          { setNumber: 1, weight: 100, reps: 12, volume: 1200 },
          { setNumber: 2, weight: 120, reps: 10, volume: 1200 },
          { setNumber: 3, weight: 150, reps: 6, volume: 900 },
        ],
        exerciseVolume: 3300,
      },
      {
        exerciseDate: '2010-07-10T21:38:15.159Z',
        exerciseType: 'Machine',
        exercise: 'Chest Press',
        bodyweightVariation: '',
        setArray: [
          { setNumber: 1, weight: 100, reps: 12, volume: 1200 },
          { setNumber: 2, weight: 120, reps: 20, volume: 2400 },
          { setNumber: 3, weight: 150, reps: 6, volume: 900 },
        ],
        exerciseVolume: 4500,
      },
      {
        exerciseDate: '2013-07-10T21:38:15.159Z',
        exerciseType: 'Machine',
        exercise: 'Chest Press',
        bodyweightVariation: '',
        setArray: [
          { setNumber: 1, weight: 100, reps: 12, volume: 1200 },
          { setNumber: 2, weight: 120, reps: 10, volume: 1200 },
          { setNumber: 3, weight: 600, reps: 6, volume: 3600 },
        ],
        exerciseVolume: 5900,
      },
      {
        exerciseDate: '2022-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 12, volume: 12 },
          { setNumber: 2, weight: '', reps: 10, volume: 10 },
          { setNumber: 3, weight: '', reps: 8, volume: 8 },
        ],
        exerciseVolume: 30,
      },
      {
        exerciseDate: '2021-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 15, volume: 15 },
          { setNumber: 2, weight: '', reps: 10, volume: 10 },
          { setNumber: 3, weight: '', reps: 8, volume: 8 },
        ],
        exerciseVolume: 33,
      },
    ],
  };

  testObjectArray: any[] = [
    {
      exerciseDate: '2022-05-07T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        {
          setNumber: 1,
          weight: 45,
          reps: 12,
          volume: 540,
        },
        {
          setNumber: 2,
          weight: 105,
          reps: 10,
          volume: 1050,
        },
        {
          setNumber: 3,
          weight: 125,
          reps: 8,
          volume: 1000,
        },
      ],
      exerciseVolume: 2590,
    },
    {
      exerciseDate: '2022-05-07T22:40:03.208Z',
      exerciseType: 'machine',
      exercise: 'tricep extension',
      bodyweightVariation: '',
      setArray: [
        {
          setNumber: 1,
          weight: 44,
          reps: 12,
          volume: 528,
        },
        {
          setNumber: 2,
          weight: 52.5,
          reps: 10,
          volume: 525,
        },
        {
          setNumber: 3,
          weight: 540,
          reps: 10,
          volume: 540,
        },
      ],
      exerciseVolume: 1560,
    },
  ];

  constructor(
    private store: Store,
    private dataHistoryService: DataHistoryService
  ) {}

  ngOnInit(): void {
    let activeExercisesUI$: Observable<string[][]> = this.store.select(
      (state) => state.appState.activeExercises
    );
    let lastTimeArray$: Observable<Object[][]> = this.store.select(
      (state) => state.appState.lastTime
    );
    activeExercisesUI$.subscribe((_activeExercises: string[][]) => {
      this.lastTimeDataRequest(_activeExercises);
    });
    lastTimeArray$.subscribe((_lastTimeArray: object[]) => {
      if (typeof _lastTimeArray !== 'undefined') {
        // this.lastTimeArrayForDisplay = [];
        console.log(_lastTimeArray);
        if (_lastTimeArray.length > 0) {
          this.lastTimeArrayForDisplay = _lastTimeArray;
        }
      }
      console.log(this.lastTimeArrayForDisplay);
    });
  }

  // ngOnInit(): void {
  //   let lastTimeArrayForD: any[] = [];
  //   let activeExercisesUI$: Observable<string[][]> = this.store.select(
  //     (state) => state.appState.activeExercises
  //   );
  //   let lastTimeArray$: Observable<Object[][]> = this.store.select(
  //     (state) => state.appState.lastTime
  //   );
  //   activeExercisesUI$.subscribe((_activeExercises: string[][]) => {
  //     this.lastTimeDataRequest(_activeExercises);
  //   });
  //   lastTimeArray$.subscribe((_lastTimeArray: object[]) => {
  //     if (typeof _lastTimeArray !== 'undefined') {
  //       this.lastTimeArrayForDisplay = [];
  //       console.log(_lastTimeArray);

  //       lastTimeArrayForD.push(..._lastTimeArray);
  //       this.lastTimeArrayForDisplay = lastTimeArrayForD;
  //     }
  //     console.log(this.lastTimeArrayForDisplay);
  //   });
  // }

  lastTimeDataRequest(activeExercises: string[][]) {
    return this.dataHistoryService.getLastTimeDisplayData(activeExercises);
  }
}
