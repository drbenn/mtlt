import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ExerciseHistory } from '../models/loggedInUser.model';
import { UpdateLastAndBestTime } from '../state/appState.actions';

@Injectable()
export class DataHistoryService {
  currentExerciseListForComparison: string[] = [];
  constructor(private store: Store) {}
  testData: ExerciseHistory[] = [
    {
      exerciseDate: '2022-05-04T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 8, volume: 8 },
        { setNumber: 2, weight: '', reps: 6, volume: 6 },
        { setNumber: 3, weight: '', reps: 6, volume: 6 },
        { setNumber: 4, weight: '', reps: 5, volume: 5 },
      ],
      exerciseVolume: 25,
    },
    {
      exerciseDate: '2022-05-04T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 95, reps: 10, volume: 950 },
        { setNumber: 3, weight: 115, reps: 6, volume: 690 },
      ],
      exerciseVolume: 2180,
    },
    {
      exerciseDate: '2022-05-04T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 95, reps: 10, volume: 950 },
        { setNumber: 3, weight: 115, reps: 8, volume: 920 },
        { setNumber: 4, weight: 105, reps: 9, volume: 945 },
        { setNumber: 5, weight: 115, reps: 8, volume: 920 },
      ],
      exerciseVolume: 4275,
    },
    {
      exerciseDate: '2022-05-04T21:39:25.617Z',
      exerciseType: 'dumbbell',
      exercise: 'bench press',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 30, reps: 12, volume: 720 },
        { setNumber: 2, weight: 40, reps: 10, volume: 800 },
        { setNumber: 3, weight: 50, reps: 8, volume: 800 },
        { setNumber: 4, weight: 45, reps: 9, volume: 810 },
        { setNumber: 5, weight: 55, reps: 8, volume: 880 },
      ],
      exerciseVolume: 4010,
    },
    {
      exerciseDate: '2022-05-04T21:51:55.549Z',
      exerciseType: 'dumbbell',
      exercise: 'shoulder press',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 25, reps: 12, volume: 600 },
        { setNumber: 2, weight: 35, reps: 10, volume: 700 },
        { setNumber: 3, weight: 35, reps: 10, volume: 700 },
      ],
      exerciseVolume: 2000,
    },
    {
      exerciseDate: '2022-05-04T22:39:43.019Z',
      exerciseType: 'dumbbell',
      exercise: 'curl(supine)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 20, reps: 12, volume: 480 },
        { setNumber: 2, weight: 25, reps: 8, volume: 400 },
        { setNumber: 3, weight: 25, reps: 5, volume: 250 },
      ],
      exerciseVolume: 1130,
    },
    {
      exerciseDate: '2022-05-04T22:40:03.208Z',
      exerciseType: 'machine',
      exercise: 'tricep extension',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 42.5, reps: 12, volume: 510 },
        { setNumber: 2, weight: 52.5, reps: 10, volume: 525 },
        { setNumber: 3, weight: 52.5, reps: 10, volume: 525 },
      ],
      exerciseVolume: 1560,
    },

    {
      exerciseDate: '2022-05-07T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 10, volume: 10 },
        { setNumber: 2, weight: '', reps: 6, volume: 6 },
        { setNumber: 3, weight: '', reps: 4, volume: 4 },
        { setNumber: 4, weight: '', reps: 3, volume: 3 },
      ],
      exerciseVolume: 23,
    },
    {
      exerciseDate: '2022-05-07T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 105, reps: 10, volume: 1050 },
        { setNumber: 3, weight: 125, reps: 8, volume: 1000 },
      ],
      exerciseVolume: 2590,
    },
    {
      exerciseDate: '2022-05-07T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 105, reps: 10, volume: 1050 },
        { setNumber: 3, weight: 125, reps: 8, volume: 1000 },
        { setNumber: 4, weight: 115, reps: 9, volume: 1035 },
        { setNumber: 5, weight: 125, reps: 8, volume: 1000 },
      ],
      exerciseVolume: 4625,
    },
    {
      exerciseDate: '2022-05-07T21:39:25.617Z',
      exerciseType: 'dumbbell',
      exercise: 'bench press',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 30, reps: 12, volume: 720 },
        { setNumber: 2, weight: 45, reps: 10, volume: 900 },
        { setNumber: 3, weight: 55, reps: 8, volume: 880 },
        { setNumber: 4, weight: 50, reps: 9, volume: 900 },
        { setNumber: 5, weight: 55, reps: 8, volume: 880 },
      ],
      exerciseVolume: 4280,
    },
    {
      exerciseDate: '2022-05-07T21:51:55.549Z',
      exerciseType: 'dumbbell',
      exercise: 'shoulder press',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 27.5, reps: 12, volume: 660 },
        { setNumber: 2, weight: 40, reps: 7, volume: 560 },
        { setNumber: 3, weight: 35, reps: 8, volume: 560 },
      ],
      exerciseVolume: 1780,
    },
    {
      exerciseDate: '2022-05-07T22:39:43.019Z',
      exerciseType: 'dumbbell',
      exercise: 'curl(supine)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 20, reps: 12, volume: 480 },
        { setNumber: 2, weight: 25, reps: 8, volume: 400 },
        { setNumber: 3, weight: 25, reps: 7, volume: 350 },
      ],
      exerciseVolume: 1230,
    },
    {
      exerciseDate: '2022-05-07T22:40:03.208Z',
      exerciseType: 'machine',
      exercise: 'tricep extension',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 44, reps: 12, volume: 528 },
        { setNumber: 2, weight: 52.5, reps: 10, volume: 525 },
        { setNumber: 3, weight: 540, reps: 10, volume: 540 },
      ],
      exerciseVolume: 1560,
    },
    {
      exerciseDate: '2022-05-10T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 9, volume: 9 },
        { setNumber: 2, weight: '', reps: 7, volume: 7 },
        { setNumber: 3, weight: '', reps: 6, volume: 6 },
        { setNumber: 4, weight: '', reps: 4, volume: 4 },
      ],
      exerciseVolume: 26,
    },
    {
      exerciseDate: '2022-05-13T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 9, volume: 9 },
        { setNumber: 2, weight: '', reps: 7, volume: 7 },
        { setNumber: 3, weight: '', reps: 7, volume: 7 },
        { setNumber: 4, weight: '', reps: 7, volume: 7 },
      ],
      exerciseVolume: 30,
    },
    {
      exerciseDate: '2022-05-16T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 10, volume: 10 },
        { setNumber: 2, weight: '', reps: 7, volume: 7 },
        { setNumber: 3, weight: '', reps: 7, volume: 7 },
        { setNumber: 4, weight: '', reps: 7, volume: 7 },
      ],
      exerciseVolume: 25,
    },
    {
      exerciseDate: '2022-05-19T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 8, volume: 8 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 36,
    },
    {
      exerciseDate: '2022-05-22T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 38,
    },
    {
      exerciseDate: '2022-05-25T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 11, volume: 11 },
        { setNumber: 2, weight: '', reps: 8, volume: 8 },
        { setNumber: 3, weight: '', reps: 10, volume: 10 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 37,
    },
    {
      exerciseDate: '2022-05-28T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 9, volume: 9 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 39,
    },
    {
      exerciseDate: '2022-05-31T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 9, volume: 9 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 10, volume: 10 },
      ],
      exerciseVolume: 39,
    },
    {
      exerciseDate: '2022-06-03T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 38,
    },
    {
      exerciseDate: '2022-06-06T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 9, volume: 9 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 39,
    },
    {
      exerciseDate: '2022-06-09T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 10, volume: 10 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 36,
    },
    {
      exerciseDate: '2022-06-12T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 9, volume: 9 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 37,
    },
    {
      exerciseDate: '2022-06-15T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 13, volume: 13 },
        { setNumber: 2, weight: '', reps: 11, volume: 11 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 9, volume: 9 },
      ],
      exerciseVolume: 41,
    },
    {
      exerciseDate: '2022-06-18T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 10, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 38,
    },
    {
      exerciseDate: '2022-06-21T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 10, volume: 10 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 40,
    },
    {
      exerciseDate: '2022-06-24T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 38,
    },
    {
      exerciseDate: '2022-06-27T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 10, volume: 10 },
      ],
      exerciseVolume: 40,
    },
    {
      exerciseDate: '2022-06-30T21:35:16.048Z',
      exerciseType: 'bodyweight',
      exercise: 'pullup',
      bodyweightVariation: '5. full',
      setArray: [
        { setNumber: 1, weight: '', reps: 12, volume: 12 },
        { setNumber: 2, weight: '', reps: 10, volume: 10 },
        { setNumber: 3, weight: '', reps: 8, volume: 8 },
        { setNumber: 4, weight: '', reps: 8, volume: 8 },
      ],
      exerciseVolume: 38,
    },
    {
      exerciseDate: '2022-05-10T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 115, reps: 10, volume: 1150 },
        { setNumber: 3, weight: 135, reps: 8, volume: 1080 },
      ],
      exerciseVolume: 2230,
    },
    {
      exerciseDate: '2022-05-13T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 65, reps: 12, volume: 780 },
        { setNumber: 2, weight: 125, reps: 10, volume: 1250 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 3190,
    },
    {
      exerciseDate: '2022-05-16T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 85, reps: 12, volume: 1020 },
        { setNumber: 2, weight: 125, reps: 10, volume: 1250 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 3430,
    },
    {
      exerciseDate: '2022-05-19T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 85, reps: 12, volume: 1020 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 3530,
    },
    {
      exerciseDate: '2022-05-22T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 3650,
    },
    {
      exerciseDate: '2022-05-25T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 3650,
    },
    {
      exerciseDate: '2022-05-28T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 6, volume: 930 },
      ],
      exerciseVolume: 3420,
    },
    {
      exerciseDate: '2022-05-31T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 155, reps: 12, volume: 1860 },
      ],
      exerciseVolume: 4350,
    },
    {
      exerciseDate: '2022-06-03T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 155, reps: 8, volume: 1240 },
      ],
      exerciseVolume: 3730,
    },
    {
      exerciseDate: '2022-06-06T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 155, reps: 8, volume: 1240 },
      ],
      exerciseVolume: 3730,
    },
    {
      exerciseDate: '2022-06-09T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 6, volume: 990 },
      ],
      exerciseVolume: 3480,
    },
    {
      exerciseDate: '2022-06-12T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 6, volume: 990 },
      ],
      exerciseVolume: 3480,
    },
    {
      exerciseDate: '2022-06-15T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 8, volume: 1320 },
      ],
      exerciseVolume: 3810,
    },
    {
      exerciseDate: '2022-06-21T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 175, reps: 6, volume: 1050 },
      ],
      exerciseVolume: 3540,
    },
    {
      exerciseDate: '2022-06-24T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 175, reps: 8, volume: 1400 },
      ],
      exerciseVolume: 3890,
    },
    {
      exerciseDate: '2022-06-27T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 175, reps: 6, volume: 1050 },
      ],
      exerciseVolume: 3540,
    },
    {
      exerciseDate: '2022-06-30T21:37:21.138Z',
      exerciseType: 'barbell',
      exercise: 'squat(back)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 185, reps: 6, volume: 1110 },
      ],
      exerciseVolume: 3600,
    },
    {
      exerciseDate: '2022-05-10T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 45, reps: 12, volume: 540 },
        { setNumber: 2, weight: 115, reps: 10, volume: 1150 },
        { setNumber: 3, weight: 125, reps: 8, volume: 1000 },
        { setNumber: 4, weight: 115, reps: 9, volume: 1035 },
        { setNumber: 5, weight: 135, reps: 8, volume: 1080 },
      ],
      exerciseVolume: 4265,
    },
    {
      exerciseDate: '2022-05-13T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 65, reps: 12, volume: 780 },
        { setNumber: 2, weight: 125, reps: 10, volume: 1250 },
        { setNumber: 3, weight: 135, reps: 8, volume: 1080 },
        { setNumber: 4, weight: 125, reps: 9, volume: 1125 },
        { setNumber: 5, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 5395,
    },
    {
      exerciseDate: '2022-05-16T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 65, reps: 12, volume: 780 },
        { setNumber: 2, weight: 125, reps: 10, volume: 1250 },
        { setNumber: 3, weight: 140, reps: 8, volume: 1120 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 155, reps: 8, volume: 1240 },
      ],
      exerciseVolume: 5605,
    },
    {
      exerciseDate: '2022-05-19T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 65, reps: 12, volume: 780 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 140, reps: 8, volume: 1160 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 145, reps: 8, volume: 1160 },
      ],
      exerciseVolume: 5665,
    },
    {
      exerciseDate: '2022-05-25T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 65, reps: 12, volume: 780 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 155, reps: 8, volume: 1240 },
      ],
      exerciseVolume: 5745,
    },
    {
      exerciseDate: '2022-05-28T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 165, reps: 8, volume: 1320 },
      ],
      exerciseVolume: 6185,
    },
    {
      exerciseDate: '2022-05-31T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 145, reps: 8, volume: 1160 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 165, reps: 8, volume: 1320 },
      ],
      exerciseVolume: 6185,
    },
    {
      exerciseDate: '2022-06-03T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 155, reps: 8, volume: 1240 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 165, reps: 8, volume: 1320 },
      ],
      exerciseVolume: 6265,
    },
    {
      exerciseDate: '2022-06-06T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 155, reps: 8, volume: 1240 },
        { setNumber: 4, weight: 135, reps: 9, volume: 1215 },
        { setNumber: 5, weight: 175, reps: 8, volume: 1400 },
      ],
      exerciseVolume: 6345,
    },
    {
      exerciseDate: '2022-06-09T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 8, volume: 1320 },
        { setNumber: 4, weight: 145, reps: 9, volume: 1305 },
        { setNumber: 5, weight: 185, reps: 8, volume: 1480 },
      ],
      exerciseVolume: 6595,
    },
    {
      exerciseDate: '2022-06-12T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 8, volume: 1320 },
        { setNumber: 4, weight: 145, reps: 9, volume: 1305 },
        { setNumber: 5, weight: 195, reps: 9, volume: 1755 },
      ],
      exerciseVolume: 6870,
    },
    {
      exerciseDate: '2022-06-15T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 95, reps: 12, volume: 1140 },
        { setNumber: 2, weight: 135, reps: 10, volume: 1350 },
        { setNumber: 3, weight: 165, reps: 8, volume: 1320 },
        { setNumber: 4, weight: 145, reps: 9, volume: 1305 },
        { setNumber: 5, weight: 195, reps: 9, volume: 1755 },
      ],
      exerciseVolume: 6870,
    },
    {
      exerciseDate: '2022-06-18T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 135, reps: 12, volume: 1620 },
        { setNumber: 2, weight: 155, reps: 10, volume: 1550 },
        { setNumber: 3, weight: 185, reps: 8, volume: 1480 },
        { setNumber: 4, weight: 155, reps: 9, volume: 1395 },
        { setNumber: 5, weight: 195, reps: 8, volume: 1560 },
      ],
      exerciseVolume: 7605,
    },
    {
      exerciseDate: '2022-06-21T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 135, reps: 12, volume: 1620 },
        { setNumber: 2, weight: 155, reps: 10, volume: 1550 },
        { setNumber: 3, weight: 185, reps: 8, volume: 1480 },
        { setNumber: 4, weight: 155, reps: 9, volume: 1395 },
        { setNumber: 5, weight: 195, reps: 8, volume: 1560 },
      ],
      exerciseVolume: 7605,
    },
    {
      exerciseDate: '2022-06-24T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 135, reps: 12, volume: 1620 },
        { setNumber: 2, weight: 155, reps: 10, volume: 1550 },
        { setNumber: 3, weight: 185, reps: 8, volume: 1480 },
        { setNumber: 4, weight: 155, reps: 9, volume: 1395 },
        { setNumber: 5, weight: 195, reps: 8, volume: 1560 },
      ],
      exerciseVolume: 7605,
    },
    {
      exerciseDate: '2022-06-27T21:38:13.630Z',
      exerciseType: 'barbell',
      exercise: 'deadlift(trap-bar)',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 135, reps: 12, volume: 1620 },
        { setNumber: 2, weight: 155, reps: 10, volume: 1550 },
        { setNumber: 3, weight: 185, reps: 8, volume: 1480 },
      ],
      exerciseVolume: 4650,
    },
  ];

  getLastTimeDisplayData(activeExercises: string[][]) {
    let returnedHistoryLastTime: any[] = [];
    let returnedHistoryBestTime: any[] = [];
    let lastAndBestTimeArray: any[] = [];

    activeExercises?.forEach((activeExerciseArray) => {
      let exerciseMethod: string = activeExerciseArray[1];
      let exercise: string = activeExerciseArray[2];
      let bodyweightVariation: string = activeExerciseArray[3];
      let filter;

      if (exerciseMethod !== 'bodyweight') {
        filter = this.testData?.filter(
          (obj) =>
            obj.exerciseType == exerciseMethod && obj.exercise == exercise
        );
      }

      if (exerciseMethod === 'bodyweight') {
        filter = this.testData?.filter(
          (obj) =>
            obj.exerciseType == exerciseMethod &&
            obj.exercise == exercise &&
            obj.bodyweightVariation == bodyweightVariation
        );
      }
      let lastTime = filter?.reduce((a, b) =>
        a.exerciseDate > b.exerciseDate ? a : b
      );

      let bestTime = filter?.reduce((a, b) =>
        a.exerciseVolume > b.exerciseVolume ? a : b
      );

      returnedHistoryLastTime.push(lastTime);
      returnedHistoryBestTime.push(bestTime);
    });
    lastAndBestTimeArray[0] = returnedHistoryLastTime;
    lastAndBestTimeArray[1] = returnedHistoryBestTime;

    this.store.dispatch(new UpdateLastAndBestTime(lastAndBestTimeArray));
  }
}
