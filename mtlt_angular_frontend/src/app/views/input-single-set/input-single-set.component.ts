import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-single-set',
  templateUrl: './input-single-set.component.html',
  styleUrls: ['./input-single-set.component.scss'],
})
export class InputSingleSetComponent implements OnInit {
  @Output() exerciseTotalVolume = new EventEmitter<string[]>();
  @Input() inputFormGroup = this.fb.group({});
  @Input() exerType: string;
  @Input() set i(value: number) {
    this.index = value;
    this.inputFormGroup.get('setNumber')?.setValue(value);
  }
  singleDumbbell: boolean = false;
  index: number;

  repsInSet: number;
  weightInSet: number;

  bodyWeight: boolean = false;

  constructor(
    private fb: FormBuilder,
  ) {}
  ngOnInit() {
    // On init of new rep row, setNumber will auto-populate value based on index
    this.inputFormGroup.get('setNumber')?.setValue(this.index);
  }

  /**
   * Takes user input from form and places in set object
   * @param setVolume
   */
  updateSetValue(setVolume: number): void {
    this.inputFormGroup.get('volume')?.setValue(setVolume);
    return;
  }

  singledumbbellStatus() {
    this.singleDumbbell = !this.singleDumbbell;
  }

  /**
   * If bodyweight exercise selected volume will be counted as reps, instead of
   * reps*weight. Then volume passed to be emitted outside of component
   * @returns
   */
  volumeCalc(): void {
    let setVolume: number;
    this.exerType === 'bodyweight'
      ? (this.bodyWeight = true)
      : (this.bodyWeight = false);

    if (this.bodyWeight) {
      setVolume = this.repsInSet * 1;
    } else if (this.exerType === 'dumbbell' && this.singleDumbbell === false) {
      setVolume = this.repsInSet * (this.weightInSet * 2);
    } else {
      setVolume = this.repsInSet * this.weightInSet;
    }

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
    // console.log(`setIndex: ${setIndex}`);

    let emitArray = [setIndex, vol];
    this.exerciseTotalVolume.emit(emitArray);
  }
}
