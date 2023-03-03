import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { YouTubePlayerModule } from "@angular/youtube-player";

import { PagesRoutingModule } from './pages-routing.module';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { DeleteWorkoutComponent } from './delete-workout/delete-workout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifyWorkoutComponent } from './modify-workout/modify-workout.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';
import { FiltroPipe } from '../pipes/filtro.pipe';
import { RouterModule } from '@angular/router';
import { ModifyWorkoutDetailsComponent } from './modify-workout-details/modify-workout-details.component';


@NgModule({
  declarations: [
    CreateWorkoutComponent,
    DeleteWorkoutComponent,
    LoginComponent,
    LogoutComponent,
    MainPageComponent,
    ModifyWorkoutComponent,
    WorkoutDetailsComponent,
    FiltroPipe,
    ModifyWorkoutDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    YouTubePlayerModule,
    
   
    
  ]
})
export class PagesModule { }
