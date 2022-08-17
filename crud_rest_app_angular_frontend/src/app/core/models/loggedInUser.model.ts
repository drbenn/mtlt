



export interface UserLogin {
  username: string;
  password:string;
}

export interface UserRegister {
  username: string;
  password:string;
  email:string;
  joinDate: Date;
}

export interface LoggedInUser {
  username?: string;
  joinDate?: Date | string;
  email?:string;
  customExercises?: CustomExercise[];
  customWorkouts?: CustomWorkout;
  exerciseHistory?: ExerciseHistory[];
  exerciseLastTime?: {}[];
  exerciseAllTimeBest?: {}[];
}

export interface CustomExercise {
  exerciseType: string;
  exerciseName: string[] | BodyWeightProgression[];
}

export interface CustomWorkout {
  exerciseType: string[];
  exerciseName: string[];
}

export interface BodyWeightProgression {
  exerciseVariation: string;
  exercises: string[];
}

export interface ExerciseHistory {
  exerciseDate: Date | string;
  exerciseType: string;
  exercise: string;
  bodyweightVariation: string;
  setArray: SetArray[];
  exerciseVolume: number;
}

export interface SetArray {
  setNumber: number;
  weight?: number | string;
  reps: number;
  volume: number;
}
