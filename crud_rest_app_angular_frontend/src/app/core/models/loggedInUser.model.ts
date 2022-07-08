export interface LoggedInUser {
  username: string;
  joinDate: Date;
  customExercises?: CustomExercise[];
  customWorkouts?: CustomWorkout;
  exerciseHistory?: [{}];
  exerciseLastTime?: [{}];
  exerciseAllTimeBest?: [{}];
}

export interface CustomExercise {
  exerciseType: string;
  exerciseName: string;
}

export interface CustomWorkout {
  exerciseType: string[];
  exerciseName: string[];
}
