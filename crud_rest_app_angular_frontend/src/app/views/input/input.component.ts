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

  @Input() set i(value: number) {
    this.index = value;
    this.inputFormGroup.get('setNumber')?.setValue(value);
  }

  index: number;

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
  }

  volumeCalc() {
    // if bodyweight exercise will only count volume as reps, instead of reps x weight
    let setVolume: number;

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
  }

  updateSetValue(setVolume: number) {
    this.inputFormGroup.get('volume')?.setValue(setVolume);
  }

  outputVolumeToParentForDisplay(vol: string) {
    let setIndex: string = String(this.index);
    let emitArray = [setIndex, vol];
    this.exerciseTotalVolume.emit(emitArray);
  }
}
