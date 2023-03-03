import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { DeleteWorkoutComponent } from './delete-workout/delete-workout.component';
import { PagesGuard } from './guard/pages.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifyWorkoutDetailsComponent } from './modify-workout-details/modify-workout-details.component';
import { ModifyWorkoutComponent } from './modify-workout/modify-workout.component';
import { WorkoutDetailsComponent } from './workout-details/workout-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'logout', component:LogoutComponent},
      {path: 'main-page', component:MainPageComponent},
      {path: 'create-workout', component: CreateWorkoutComponent, canActivate:[PagesGuard]},
      {path: 'delete-workout', component: DeleteWorkoutComponent, canActivate:[PagesGuard]},
      {path: 'modify-workout', component: ModifyWorkoutComponent, canActivate:[PagesGuard]},
      {path: 'modify-workout/:id', component: ModifyWorkoutDetailsComponent, canActivate:[PagesGuard]},
      {path: 'workout-details/:id', component: WorkoutDetailsComponent},
     // {path: 'create-workout-details', component: CreateWorkoutComponent},
      {path: '**', redirectTo: 'main-page'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
