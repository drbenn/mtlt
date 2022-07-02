import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DisplayComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [DisplayComponent],
})
export class DisplayModule {}
