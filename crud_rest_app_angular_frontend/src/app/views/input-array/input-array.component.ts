import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataHistoryService } from 'src/app/core/services/dataHistory.service';
import { DefaultExercises } from 'src/app/core/services/defaultExercises.service';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
  providers: [DefaultExercises],
})
export class InputArrayComponent implements OnInit {
  lastToDelete: number = -1;
  @Output() exerciseArrayForIteration = new EventEmitter<string[]>();
  @Input() exerciseIndexForCurrentWorkout: number;
  exerciseForm: FormGroup = new FormGroup({});
  thisExerciseArray: string[] = [
    '_exerciseIndex',
    '_exerciseType',
    '_exercise',
    '_bodyweightVariation',
  ];

  exerciseTypesDropDown: string[] = [
    'Barbell',
    'BodyWeight',
    'Dumbbell',
    'Kettlebell',
    'Machine',
  ];
  barbellDropDown: string[] =
    this.defaultExercises.standardBarbell.exerciseName;
  bodyweightVariationsDropDown: string[] = [
    'Bridge',
    'Handstand Pushup',
    'Leg Raise',
    'Pullup',
    'Pushup',
    'Squat',
  ];
  bwName = this.defaultExercises.standardBodyWeight.exerciseName;
  bodyweightBridgeDropDown: string[] = this.bwName[0].exerciseVariation;
  bodyweightHandStandPushupDropDown: string[] =
    this.bwName[1].exerciseVariation;
  bodyweightLegRaiseDropDown: string[] = this.bwName[2].exerciseVariation;
  bodyweightPullupDropDown: string[] = this.bwName[3].exerciseVariation;
  bodyweightPushupDropDown: string[] = this.bwName[4].exerciseVariation;
  bodyweightSquatDropDown: string[] = this.bwName[5].exerciseVariation;
  dumbbellDropDown: string[] =
    this.defaultExercises.standardDumbbell.exerciseName;
  kettlebellDropDown: string[] =
    this.defaultExercises.standardKettlebell.exerciseName;
  machineDropDown: string[] =
    this.defaultExercises.standardMachine.exerciseName;

  setAdded_activateTotalVolDisplay: boolean = false;
  currentSetVolumes: string[][] = [];
  totalVolumeForExercise: number;

  exerciseTypeSelected: string[];
  exerciseTypeToChild: string;
  bodyweightVariationSelected: string[];
  addSetButtonDisabled: boolean = true;

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService,
    private defaultExercises: DefaultExercises,
    private dataHistoryService: DataHistoryService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      exerciseDate: new Date(),
      exerciseType: ['', [Validators.required]],
      exercise: ['', [Validators.required]],
      bodyweightVariation: [''],
      setArray: new FormArray([]),
      exerciseVolume: [''],
    });

    let exerciseIndexAsString: string = String(
      this.exerciseIndexForCurrentWorkout
    );
    this.thisExerciseArray[0] = exerciseIndexAsString;
  }

  /**
   * When exercisetype dropdown selected, the exerciseTypeSelected variable will be
   * adjusted to reflect the correct list of exercises. Also, bodyWeightVariation cleared
   * for instances of switching from bodyweight to a different type.
   * @param e
   *
   * @Example e = 'barbell' => this.exerciseTypeSelected = this.barbellDropDown
   * and barbell exercises are displayed in UI
   */
  populateExerciseSelect(e: any) {
    let selectedExerciseType: string = String(e.target.value);
    let lowerCaseSelected = selectedExerciseType.toLowerCase();
    this.thisExerciseArray[1] = lowerCaseSelected;
    // console.log(this.thisExerciseArray);

    switch (lowerCaseSelected) {
      case 'barbell':
        this.exerciseTypeToChild = 'barbell';
        this.exerciseTypeSelected = this.barbellDropDown;
        this.exerciseForm.value.bodyweightVariation = '';
        this.addSetButtonDisabled = true;
        break;
      case 'bodyweight':
        this.exerciseTypeToChild = 'bodyweight';
        this.exerciseTypeSelected = this.bodyweightVariationsDropDown;
        this.exerciseForm.value.bodyweightVariation = '';
        this.addSetButtonDisabled = true;
        break;
      case 'dumbbell':
        this.exerciseTypeToChild = 'dumbbell';
        this.exerciseTypeSelected = this.dumbbellDropDown;
        this.exerciseForm.value.bodyweightVariation = '';
        this.addSetButtonDisabled = true;
        break;
      case 'kettlebell':
        this.exerciseTypeToChild = 'kettlebell';
        this.exerciseTypeSelected = this.kettlebellDropDown;
        this.exerciseForm.value.bodyweightVariation = '';
        this.addSetButtonDisabled = true;
        break;
      case 'machine':
        this.exerciseTypeToChild = 'machine';
        this.exerciseTypeSelected = this.machineDropDown;
        this.exerciseForm.value.bodyweightVariation = '';
        this.addSetButtonDisabled = true;
        break;
      default:
        console.log(`There is an error in the selection`);
        break;
    }
  }

  activateAddSet(e: any): void {
    this.addSetButtonDisabled = false;
    // console.log('the bodyweight variation has been changed');
    this.thisExerciseArray[3] = e.target.value.toLowerCase();
    // console.log(this.thisExerciseArray);
    // emit thisExerciseArray because bodyweight exercise type,
    // exercise and bodyweight variation selected
    // console.log(
    //   `emit because bw and variation selected: ${this.thisExerciseArray}`
    // );

    this.exerciseArrayForIteration.emit(this.thisExerciseArray);
  }

  /**
   * When exercisetype dropdown selected as bodyweight, the bodyweightVariationSelected variable
   * will be adjusted to reflect the correct list of bodyweight exercise variations
   * @param e
   *
   * @Example e = 'bridge' => this.bodyweightVariationSelected = this.bodyweightBridgeDropDown
   * and bridge exercise variations are displayed in UI
   */
  populateBodyWeightVariationSelect(e: any) {
    let selectedBodyWeightExercise: string = String(e.target.value);
    let lowerCaseSelectedBw = selectedBodyWeightExercise.toLowerCase();
    this.thisExerciseArray[2] = lowerCaseSelectedBw;
    // console.log(this.thisExerciseArray);
    // emit thisExerciseArray because exercise selected, and exercise type not bodyweight which requires a variation also selected
    if (this.thisExerciseArray[1] !== 'bodyweight') {
      // console.log(
      //   `emit ${this.thisExerciseArray} because bodyweight not selected`
      // );
      this.exerciseArrayForIteration.emit(this.thisExerciseArray);
    }

    switch (lowerCaseSelectedBw) {
      case 'bridge':
        this.bodyweightVariationSelected = this.bodyweightBridgeDropDown;
        break;
      case 'handstand pushup':
        this.bodyweightVariationSelected =
          this.bodyweightHandStandPushupDropDown;
        break;
      case 'leg raise':
        this.bodyweightVariationSelected = this.bodyweightLegRaiseDropDown;
        break;
      case 'pullup':
        this.bodyweightVariationSelected = this.bodyweightPullupDropDown;
        break;
      case 'pushup':
        this.bodyweightVariationSelected = this.bodyweightPushupDropDown;
        break;
      case 'squat':
        this.bodyweightVariationSelected = this.bodyweightSquatDropDown;
        break;
      default:
        this.addSetButtonDisabled = false;
        break;
    }
  }
  get setArray() {
    return <FormArray>this.exerciseForm.get('setArray');
  }

  // Adds new set in display for input and also adds new setArray form for syncronous data collection on input
  addSet(): void {
    this.lastToDelete += 1;
    let newSet = this.formFactoryService.getSetForm();

    return this.setArray.push(newSet);
  }

  //
  /**
   * Removes set in display by index then passes index number for id purposes to update
   * data form and volume calculation
   * @param i
   */
  removeSet(i: number): void {
    this.setArray.removeAt(i);
    let setIndex: string = String(i + 1);
    this.removeExistingSetsVolume(setIndex);
    this.updateCurrentSetVolumesArrayAfterChange();
    this.updateExerciseTotalVolume();
    return;
  }

  /**
   * Upon receiving [set, volume] from app-input component, will determine if values are valid or "NaN",
   * then, if successful, will trigger methods used to update volume in user interface and form
   * @param setVolArray
   */
  receiveSetVolume(setVolArray: any): void {
    let setIndex = setVolArray[0];
    let setVolume = setVolArray[1];
    if (setVolume === 'NaN') {
      return;
    }
    this.removeExistingSetsVolume(setIndex);
    // pushes original and revised set volumes to currentSetVolumes var to calc totalVolumeForExercise
    this.currentSetVolumes.push(setVolArray);
    this.updateCurrentSetVolumesArrayAfterChange();
    this.updateExerciseTotalVolume();
    this.activateTotalVolumeDisplay();
    return;
  }

  /**
   * Used to update total volume calculation. Removes set if already existing in currentSetVolumes
   * for total volume calculatuon
   * @param setNumber
   */
  removeExistingSetsVolume(setNumber: string): void {
    this.currentSetVolumes.forEach((setIndexVolumeArray) => {
      let setNumberAsNumber: number = Number(setNumber);
      let setIndexVolumeArrayAsNumber: number = Number(setIndexVolumeArray[0]);
      if (setIndexVolumeArrayAsNumber === setNumberAsNumber) {
        let elementIndex = Number(
          this.currentSetVolumes.indexOf(setIndexVolumeArray)
        );
        this.currentSetVolumes.splice(elementIndex, 1);
      }
      return;
    });
  }

  /**
   * If required input are entered by user(reps and weight(?), total volume for exercise
   * will begin to display in client view
   * @example if rep*weight(?) entered => view boolean = true and will display in UI
   */
  activateTotalVolumeDisplay(): boolean {
    return (this.setAdded_activateTotalVolDisplay = true);
  }

  /**
   * Used in calculation of total volume. Creates replacement and pushes set number to currentSetVolumes
   * which is used as a storage to calculate total volume of all sets in exercise. If not updated, the
   * index set being passed on deleting set/row may have an incorrect index/set to match with the
   * appropriate index/set i, which would potentially show an incorrect total volume
   */
  updateCurrentSetVolumesArrayAfterChange(): void {
    let newSetVolumesAfterDelete: string[][] = [];
    let setNumber: number = 1;
    this.currentSetVolumes.forEach((element) => {
      let savedVolume = element[1];
      let newArray = [String(setNumber), savedVolume];
      newSetVolumesAfterDelete.push(newArray);
      setNumber += 1;
    });
    this.currentSetVolumes = newSetVolumesAfterDelete;
    return;
  }

  /**
   * Assists in calculating total volume. If no sets available for volume calculation, total volume will be zeroed else
   * loops through currentSetVolumes, and sums volumes for totalVolume use in display and form
   * @returns number
   */
  updateExerciseTotalVolume(): number {
    //
    if (this.currentSetVolumes.length === 0) {
      return (this.totalVolumeForExercise = 0);
    } else {
      //
      let runningTotalVolume: number = 0;
      this.currentSetVolumes.forEach((element) => {
        let volAsNumber: number = Number(element[1]);
        runningTotalVolume += volAsNumber;
        return (this.totalVolumeForExercise = runningTotalVolume);
      });
    }
    return (this.exerciseForm.value.exerciseVolume =
      this.totalVolumeForExercise);
  }

  onSubmit() {
    console.warn('form submitted');
    // console.log(this.exerciseForm.value);
  }

  closeExercise() {
    // console.log('exercise closing');
    // alert(
    //   'Are you really done? This will also remove the exercise for editing'
    // );
  }

  // testSet() {
  //   let exIndexInCurrentWorkout: number = this.exerciseIndexForCurrentWorkout;
  //   let exType: string = this.exerciseForm.value.exerciseType;
  //   let ex: string = this.exerciseForm.value.exercise;
  //   let exVar: string = this.exerciseForm.value.bodyweightVariation;
  //   let exerciseId: string = `${exIndexInCurrentWorkout}/${exType}/${ex}/${exVar}`;
  // console.log(exerciseId);
  // }
}
