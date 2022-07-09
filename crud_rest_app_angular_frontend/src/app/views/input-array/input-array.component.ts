import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { elementAt } from 'rxjs';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input-array',
  templateUrl: './input-array.component.html',
  styleUrls: ['./input-array.component.scss'],
})
export class InputArrayComponent implements OnInit {
  exerciseForm: FormGroup = new FormGroup({});
  setAdded_activateTotalVolDisplay: boolean = false;
  currentSetVolumes: string[][] = [];
  totalVolumeForExercise: number;

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}

  ngOnInit(): void {
    this.exerciseForm = this.fb.group({
      exerciseDate: new Date(),
      exerciseType: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.minLength(10),
        ],
      ],
      exercise: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.minLength(10),
        ],
      ],
      setArray: new FormArray([]),
      exerciseVolume: [''],
    });
  }

  get setArray() {
    return <FormArray>this.exerciseForm.get('setArray');
  }

  // Adds new set in display for input and also adds new setArray form for syncronous data collection on input
  addSet(): void {
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
    console.log(this.exerciseForm.value);
  }

  closeExercise() {
    // console.log('exercise closing');
    // alert(
    //   'Are you really done? This will also remove the exercise for editing'
    // );
  }

  testSet() {
    // let setValues = this.setArray.value[1].volume;
  }
}
