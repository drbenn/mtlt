import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoggedInUser } from 'src/app/core/models/loggedInUser.model';

@Component({
  selector: 'app-last-time',
  templateUrl: './last-time.component.html',
  styleUrls: ['./last-time.component.scss'],
})

// component generated on selection of exercise/exercise variation
//  ALSO MUST BE DESTROYED  Rerun if changed
export class LastTimeComponent implements OnInit {
  @Input() exerciseList: string[];
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
          { setNumber: 1, weight: '', reps: 12, volume: '' },
          { setNumber: 2, weight: '', reps: 10, volume: '' },
          { setNumber: 3, weight: '', reps: 8, volume: '' },
        ],
        exerciseVolume: '30',
      },
      {
        exerciseDate: '2021-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 15, volume: '' },
          { setNumber: 2, weight: '', reps: 10, volume: '' },
          { setNumber: 3, weight: '', reps: 8, volume: '' },
        ],
        exerciseVolume: '33',
      },
      {
        exerciseDate: '2020-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 12, volume: '' },
          { setNumber: 2, weight: '', reps: 12, volume: '' },
          { setNumber: 3, weight: '', reps: 18, volume: '' },
        ],
        exerciseVolume: '42',
      },
      {
        exerciseDate: '2019-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 22, volume: '' },
          { setNumber: 2, weight: '', reps: 10, volume: '' },
          { setNumber: 3, weight: '', reps: 8, volume: '' },
        ],
        exerciseVolume: '40',
      },
      {
        exerciseDate: '2022-07-10T21:40:51.815Z',
        exerciseType: 'BodyWeight',
        exercise: 'Pullup',
        bodyweightVariation: '5. Full',
        setArray: [
          { setNumber: 1, weight: '', reps: 120, volume: '' },
          { setNumber: 2, weight: '', reps: 10, volume: '' },
          { setNumber: 3, weight: '', reps: 8, volume: '' },
        ],
        exerciseVolume: '138',
      },
    ],
  };

  getArrayOfExercisesEntered() {}

  constructor(private store: Store) {}

  ngOnInit(): void {
    let activeExercisesUI$: Observable<string[][]> = this.store.select(
      (state) => state.appState.activeExercises
    );
    activeExercisesUI$.subscribe((_activeExercises: string[][]) => {
      console.log('last time component actually listening');

      console.log(_activeExercises);
    });
  }
}
