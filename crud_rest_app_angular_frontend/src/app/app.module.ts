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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LastTimeComponent } from './views/last-time/last-time.component';
import { DataHistoryService } from './core/services/dataHistory.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppState } from './core/state/appState.state';
import { BestTimeComponent } from './views/best-time/best-time.component';
import { NavComponent } from './views/nav/nav.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputArrayComponent,
    ExercisePanelComponent,
    LastTimeComponent,
    BestTimeComponent,
    NavComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DisplayModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [DataHistoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
