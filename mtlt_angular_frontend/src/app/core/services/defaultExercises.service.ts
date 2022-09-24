import { CustomExercise, LoggedInUser } from '../models/loggedInUser.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DefaultExercises {
  defaults: string[] = [];
  standardBarbell = {
    exerciseType: 'Barbell',
    exerciseName: [
      'Bench Press',
      'Clean',
      'Clean & Press',
      'Deadlift(Standard)',
      'Deadlift(Sumo)',
      'Deadlift(Trap-Bar)',
      'Overhead Press',
      'Push-Press',
      'Squat(Back)',
      'Squat(Front)',
    ],
  };

  standardDumbbell = {
    exerciseType: 'Dumbbell',
    exerciseName: [
      'Arnold Press',
      'Bench Press',
      'Bent-Over Row',
      'Clean',
      'Curl(Arnold)',
      'Curl(Hammer)',
      'Curl(Supine)',
      'Flat Pec Flye',
      'Lateral Raise',
      'Lunge',
      'Shoulder Press',
      'Shrug',
    ],
  };

  standardMachine = {
    exerciseType: 'Machine',
    exerciseName: [
      'Bicep Curl',
      'Chest Press',
      'Lat Pull-Down',
      'Leg Curl',
      'Leg Extension',
      'Leg Press',
      'Pec Flye',
      'Row',
      'Shoulder Press',
      'Squat',
      'Tricep Extension',
    ],
  };

  standardBodyWeight = {
    exerciseType: 'Body-Weight',
    exerciseName: [
      {
        exercise: 'Bridge',
        exerciseVariation: [
          '1. Short',
          '2. Straight',
          '3. Angled',
          '4. Head',
          '5. Half',
          '6. Full',
          '7. Wall Walk(Down)',
          '8. Wall Walk(Up)',
          '9. Closing',
          '10. Stand-to-Stand',
        ],
      },
      {
        exercise: 'HandStand Pushup',
        exerciseVariation: [
          '1. Wall Headstand',
          '2. Crow Stand',
          '3. Wall Handstand',
          '4. Half Handstand Pushup',
          '5. Handstand Pushup',
          '6. Close Handstand Pushup',
          '7. Uneven Handstand Pushup',
          '8. 1/2 1-Arm Handstand Pushup',
          '9. Lever Handstand Pushup',
          '10. 1-Arm Handstand Pushup',
        ],
      },
      {
        exercise: 'Leg Raise',
        exerciseVariation: [
          '1. Knee Tucks',
          '2. Flat Knee',
          '3. Flat Bent',
          '4. Flat Frog',
          '5. Flat Straight',
          '6. Hanging Knee',
          '7. Hanging Bent',
          '8. Hanging Frog',
          '9. Partial Straight',
          '10. Hanging Straight',
        ],
      },
      {
        exercise: 'Pullup',
        exerciseVariation: [
          '1. Vertical',
          '2. Horozontal',
          '3. Jackknife',
          '4. Half',
          '5. Full',
          '6. Close',
          '7. Uneven',
          '8. 1/2 1-Arm',
          '9. Assisted 1-Arm',
          '10. 1-Arm',
        ],
      },
      {
        exercise: 'Pushup',
        exerciseVariation: [
          '1. Wall',
          '2. Incline',
          '3. Kneeling',
          '4. Half',
          '5. Full',
          '6. Close',
          '7. Uneven',
          '8. 1/2 1-Arm',
          '9. Level',
          '10. 1-Arm',
        ],
      },
      {
        exercise: 'Squat',
        exerciseVariation: [
          '1. Shoulderstand',
          '2. Jackknife',
          '3. Supported',
          '4. Half',
          '5. Full',
          '6. Close',
          '7. Uneven',
          '8. 1/2 1-Leg',
          '9. Assisted 1-Leg',
          '10. 1-Leg',
        ],
      },
    ],
  };

  standardKettlebell = {
    exerciseType: 'Kettlebell',
    exerciseName: [
      'Clean',
      'Clean & Press',
      'Clean Squat Press',
      'Halo',
      'Lunge',
      'Lunge(Reverse)',
      'Lunge(Side)',
      'Lunge & Press',
      'Overhead Press',
      'Overhead Push Press',
      'Row',
      'Row(Renegade)',
      'Slingshot',
      'Snatch(Single)',
      'Snatch(Double)',
      'Swing',
      'Swing(Single)',
      'Swing(Changing Hands)',
      'Thruster',
      'Turkish Get Up',
      'Squat(Goblet)',
      'Squat(Racked)',
      'Windmill',
    ],
  };
}
