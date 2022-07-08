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
  // No action upon user form data input
  addSet() {
    this.setAdded_activateTotalVolDisplay = true;
    let newSet = this.formFactoryService.getSetForm();
    this.setArray.push(newSet);
  }

  // Removes set at index in display then passes that index
  removeSet(i: number) {
    this.setArray.removeAt(i);
    let setIndex: string = String(i + 1);
    this.removeExistingSetsVolume(setIndex);
    this.updateCurrentSetVolumesArrayAfterChange();
    this.updateExerciseTotalVolume();
  }

  testSet() {
    // let setValues = this.setArray.value[1].volume;
  }

  // Upon receiving setVolume from form
  receiveSetVolume(receiveArray: any) {
    let setIndex = receiveArray[0];
    let setVolume = receiveArray[1];
    if (setVolume === 'NaN') {
      return;
    }
    this.removeExistingSetsVolume(setIndex);

    // pushes original and revised set volumes to currentSetVolumes var to calc totalVolumeForExercise
    this.currentSetVolumes.push(receiveArray);
    this.updateCurrentSetVolumesArrayAfterChange();
    this.updateExerciseTotalVolume();
    this.activateTotalVolumeDisplay();
  }

  /*
  Removes set if already existing in currentSetVolumes for total volume calc and then calls       updateCurrentSetVolumesArrayAfterChange() to ensure currentSetVolumes index incrementally increase
   */
  removeExistingSetsVolume(setNumber: string) {
    this.currentSetVolumes.forEach((setIndexVolumeArray) => {
      let setNumberAsNumber: number = Number(setNumber);
      let setIndexVolumeArrayAsNumber: number = Number(setIndexVolumeArray[0]);

      if (setIndexVolumeArrayAsNumber === setNumberAsNumber) {
        let elementIndex = Number(
          this.currentSetVolumes.indexOf(setIndexVolumeArray)
        );

        this.currentSetVolumes.splice(elementIndex, 1);
      }
    });
  }

  /*
  Once first set of volume is calculated, total volume will display on screen - else total volume would display "NaN"
  */
  activateTotalVolumeDisplay() {
    this.setAdded_activateTotalVolDisplay = true;
  }

  /*
  Creates replacement set number to currentSetVolumes which calcs total volume of exercise.
  If not updated, the index/set being passed on deleting set/row may have an incorrect index/set to
  match up with the appropriate index/set in the volume calc, which would potentially show
  an incorrect total volume
  */
  updateCurrentSetVolumesArrayAfterChange() {
    let newSetVolumesAfterDelete: string[][] = [];
    let setNumber: number = 1;
    this.currentSetVolumes.forEach((element) => {
      let savedVolume = element[1];
      let newArray = [String(setNumber), savedVolume];
      newSetVolumesAfterDelete.push(newArray);
      setNumber += 1;
    });
    this.currentSetVolumes = newSetVolumesAfterDelete;
  }

  updateExerciseTotalVolume() {
    // If no sets available for volume calc, total volume will be zeroed
    if (this.currentSetVolumes.length === 0) {
      this.totalVolumeForExercise = 0;
    } else {
      // loops through currentSetVolumes, and sums volumes for use in display
      let runningTotalVolume: number = 0;
      this.currentSetVolumes.forEach((element) => {
        let volAsNumber: number = Number(element[1]);
        runningTotalVolume += volAsNumber;
        this.totalVolumeForExercise = runningTotalVolume;
      });
    }
    this.exerciseForm.value.exerciseVolume = this.totalVolumeForExercise;
  }

  onSubmit() {
    // console.warn('form submitted');
    // console.log(this.exerciseForm.value);
  }

  closeExercise() {
    // console.log('exercise closing');
    // alert(
    //   'Are you really done? This will also remove the exercise for editing'
    // );
  }
}
