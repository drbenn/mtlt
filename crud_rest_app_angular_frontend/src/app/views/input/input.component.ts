import { Component, Input, OnInit } from '@angular/core';
import { IInputSet } from 'src/app/core/models/set.model';
import { JsonPipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { FormFactoryService } from 'src/app/core/services/exerciseInput.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() inputFormGroup = this.fb.group({});

  @Input() set i(value: number) {
    this.index = value;
    this.inputFormGroup.get('setNumber')?.setValue(value);
  }

  index: number;

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
    this.inputFormGroup.get('setNumber')?.setValue(this.index);
  }
}
