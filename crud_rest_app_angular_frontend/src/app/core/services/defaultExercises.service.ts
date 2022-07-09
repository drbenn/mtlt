import { CustomExercise, LoggedInUser } from '../models/loggedInUser.model';

export const standardBarbell: CustomExercise = {
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

export const standardDumbbell: CustomExercise = {
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

export const standardMachine: CustomExercise = {
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

export const standardBodyWeight: CustomExercise = {
  exerciseType: 'Body-Weight',
  exerciseName: [
    {
      exerciseVariation: 'Leg Raise',
      exercises: [
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
      exerciseVariation: 'Pullup',
      exercises: [
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
      exerciseVariation: 'Pushup',
      exercises: [
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
      exerciseVariation: 'Squat',
      exercises: [
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

export const standardKettlebell: CustomExercise = {
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
