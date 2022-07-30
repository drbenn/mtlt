import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoggedInUser } from 'src/app/core/models/loggedInUser.model';
import { DataHistoryService } from 'src/app/core/services/dataHistory.service';
import { UpdateZindexForMobile } from 'src/app/core/state/appState.actions';

@Component({
  selector: 'app-best-time',
  templateUrl: './best-time.component.html',
  styleUrls: ['./best-time.component.scss'],
})

// component generated on selection of exercise/exercise variation
export class BestTimeComponent implements OnInit {
  zIndexArrayForMobileBest: number;
  bestTimeArrayForDisplay: any[] = [];
  public innerWidth: any;
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

  constructor(private store: Store) {}

  ngOnInit(): void {
    let zIndexMobilePane$: Observable<number[]> = this.store.select(
      (state) => state.appState.zIndexMobilePane
    );

    zIndexMobilePane$.subscribe((_zIndexMobilePane: number[]) => {
      if (_zIndexMobilePane) {
        // console.log(_zIndexMobilePane);
        this.zIndexArrayForMobileBest = _zIndexMobilePane[2];
        // console.log(`best z: ${this.zIndexArrayForMobileBest}`);
      }
    });

    this.innerWidth = window.innerWidth;

    let bestTimeArray$: Observable<Object[][]> = this.store.select(
      (state) => state.appState.bestTime
    );

    bestTimeArray$.subscribe((_bestTimeArray: object[]) => {
      if (typeof _bestTimeArray !== 'undefined') {
        if (_bestTimeArray.length > 0) {
          this.bestTimeArrayForDisplay = _bestTimeArray;
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  receiveZIndexForBestTime(zIndexArray: any): void {
    console.log(zIndexArray);
  }

  zIndexToLastTime() {
    // [zIndexCurrent, zIndexLast, zIndexBest]
    let lastTimeZIndex: number[] = [1, 3, 1];
    this.store.dispatch(new UpdateZindexForMobile(lastTimeZIndex));
  }
  zIndexToCurrentTime() {
    // [zIndexCurrent, zIndexLast, zIndexBest]
    let currentTimeZIndex: number[] = [3, 1, 1];
    this.store.dispatch(new UpdateZindexForMobile(currentTimeZIndex));
  }
}
