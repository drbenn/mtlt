import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Output() zIndexArrayForMobilePanes = new EventEmitter<number[]>();
  z3String: string = 'mobile-exercise-view z3';
  z1String: string = 'mobile-exercise-view z1';

  zIndexCurrent: string = this.z3String;
  zIndexLast: string = this.z1String;
  zIndexBest: string = this.z1String;

  constructor(private store: Store) {}

  ngOnInit(): void {
    let zIndexMobilePane$: Observable<number[]> = this.store.select(
      (state) => state.appState.zIndexMobilePane
    );

    zIndexMobilePane$.subscribe((_zIndexMobilePane: number[]) => {
      // [zIndexCurrent, zIndexLast, zIndexBest]
      if (_zIndexMobilePane[0] === 3) {
        this.zIndexCurrent = this.z3String;
        this.zIndexLast = this.z1String;
        this.zIndexBest = this.z1String;
      }

      if (_zIndexMobilePane[1] === 3) {
        this.zIndexCurrent = this.z1String;
        this.zIndexLast = this.z3String;
        this.zIndexBest = this.z1String;
      }

      if (_zIndexMobilePane[2] === 3) {
        this.zIndexCurrent = this.z1String;
        this.zIndexLast = this.z1String;
        this.zIndexBest = this.z3String;
      }
    });
  }
}
