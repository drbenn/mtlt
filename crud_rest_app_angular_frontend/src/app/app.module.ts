import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { InputComponent } from './views/input/input.component';
import { InputArrayComponent } from './views/input-array/input-array.component';
import { ExercisePanelComponent } from './views/exercise-panel/exercise-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputArrayComponent,
    ExercisePanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DisplayModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
