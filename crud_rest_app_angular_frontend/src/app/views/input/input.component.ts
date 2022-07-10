import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IInputSet } from 'src/app/core/models/set.model';
import { FormBuilder } from '@angular/forms';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() exerciseTotalVolume = new EventEmitter<string[]>();

  @Input() inputFormGroup = this.fb.group({});
  @Input() exerType: string;
  @Input() set i(value: number) {
    this.index = value;
    this.inputFormGroup.get('setNumber')?.setValue(value);
  }

  index: number;
  // exerciseTypeSelected: string = 'something';

  repsInSet: number;
  weightInSet: number;
  // volumeOfSet: number;

  bodyWeight: boolean = false;

  // workingSets = [1];
  // workingVolDisplay: number = 0;
  // inputRep: number = 0;
  // inputWeight: number = 0;
  // inputSetVolume = 10;
  // activeSetArray: IInputSet[] = [];

  // testSet: IInputSet = {
  //   set: 1,
  //   reps: 10,
  //   weight: 50,
  // };

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) {}
  ngOnInit() {
    // On init of new rep row, setNumber will auto-populate value based on index
    this.inputFormGroup.get('setNumber')?.setValue(this.index);
    console.log('this work?');
    console.log(this.exerType);
  }

  /**
   * Takes user input from form and places in set object
   * @param setVolume
   */
  updateSetValue(setVolume: number): void {
    this.inputFormGroup.get('volume')?.setValue(setVolume);
    return;
  }

  /**
   * If bodyweight exercise selected volume will be counted as reps, instead of
   * reps*weight. Then volume passed to be emitted outside of component
   * @returns
   */
  volumeCalc(): void {
    let setVolume: number;
    console.log(this.exerType);
    this.exerType === 'bodyweight'
      ? (this.bodyWeight = true)
      : (this.bodyWeight = false);

    this.bodyWeight
      ? (setVolume = this.repsInSet * 1)
      : (setVolume = this.repsInSet * this.weightInSet);

    if (setVolume) {
      this.updateSetValue(setVolume);
    }
    let volumeAsString: string = String(setVolume);
    if (volumeAsString) {
      this.outputVolumeToParentForDisplay(volumeAsString);
    }
    return;
  }

  /**
   * Takes calculated volume and sends to input-array component for display
   * and addition to form object
   * @param vol
   */
  outputVolumeToParentForDisplay(vol: string): void {
    let setIndex: string = String(this.index);
    let emitArray = [setIndex, vol];
    this.exerciseTotalVolume.emit(emitArray);
  }
}
