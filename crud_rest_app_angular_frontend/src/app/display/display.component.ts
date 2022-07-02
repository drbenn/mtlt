import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  users$: Observable<any> | undefined;

  constructor(private displayService: DisplayService) {}

  ngOnInit(): any {
    this.users$ = this.displayService.getDisplay();
  }
}
