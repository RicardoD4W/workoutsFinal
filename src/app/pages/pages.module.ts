import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { DeleteWorkoutComponent } from './delete-workout/delete-workout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifyWorkoutComponent } from './modify-workout/modify-workout.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';


@NgModule({
  declarations: [
    CreateWorkoutComponent,
    DeleteWorkoutComponent,
    LoginComponent,
    LogoutComponent,
    MainPageComponent,
    ModifyWorkoutComponent,
    WorkoutDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
