import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayModule } from './display/display.module';
import { InputSingleSetComponent } from './views/input-single-set/input-single-set.component';
import { InputExerciseSetGroupComponent } from './views/input-exercise-set-group/input-exercise-set-group.component';
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
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LandingComponent } from './views/landing/landing.component';
import { TotalVolumeComponent } from './views/dashboard/total-volume/total-volume.component';
import { VolumeByExerciseComponent } from './views/dashboard/volume-by-exercise/volume-by-exercise.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTestLoginInfoComponent } from './views/dialog-test-login-info/dialog-test-login-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputSingleSetComponent,
    InputExerciseSetGroupComponent,
    ExercisePanelComponent,
    LastTimeComponent,
    BestTimeComponent,
    NavComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LandingComponent,
    TotalVolumeComponent,
    VolumeByExerciseComponent,
    DialogTestLoginInfoComponent,
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
    HighchartsChartModule,
    MatTooltipModule,
    MatDialogModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [DataHistoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
