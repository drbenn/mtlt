import { Injectable } from '@angular/core';

@Injectable()
export class DataHistoryService {
  currentExerciseListForComparison: string[] = [];

  testData = [
    {
      exerciseDate: '2022-05-04T21:35:16.048Z',
      exerciseType: 'BodyWeight',
      exercise: 'Pullup',
      bodyweightVariation: '5. Full',
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
      exerciseType: 'Barbell',
      exercise: 'Squat(Back)',
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
      exerciseType: 'Barbell',
      exercise: 'Deadlift(Trap-Bar)',
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
      exerciseType: 'Dumbbell',
      exercise: 'Bench Press',
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
      exerciseType: 'Dumbbell',
      exercise: 'Shoulder Press',
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
      exerciseType: 'Dumbbell',
      exercise: 'Curl(Supine)',
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
      exerciseType: 'Machine',
      exercise: 'Tricep Extension',
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
      exerciseType: 'BodyWeight',
      exercise: 'Pullup',
      bodyweightVariation: '5. Full',
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
      exerciseType: 'Barbell',
      exercise: 'Squat(Back)',
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
      exerciseType: 'Barbell',
      exercise: 'Deadlift(Trap-Bar)',
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
      exerciseType: 'Dumbbell',
      exercise: 'Bench Press',
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
      exerciseType: 'Dumbbell',
      exercise: 'Shoulder Press',
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
      exerciseType: 'Dumbbell',
      exercise: 'Curl(Supine)',
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
      exerciseType: 'Machine',
      exercise: 'Tricep Extension',
      bodyweightVariation: '',
      setArray: [
        { setNumber: 1, weight: 44, reps: 12, volume: 528 },
        { setNumber: 2, weight: 52.5, reps: 10, volume: 525 },
        { setNumber: 3, weight: 540, reps: 10, volume: 540 },
      ],
      exerciseVolume: 1560,
    },
  ];

  getFoo(): void {
    return console.log('fopo');
  }

  updateCurrentExerciseListingForOtherComponents(exerciseId: string) {
    console.log(exerciseId);
  }
}
