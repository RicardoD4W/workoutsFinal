import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { DeleteWorkoutComponent } from './delete-workout/delete-workout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ModifyWorkoutComponent } from './modify-workout/modify-workout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component:LoginComponent},
      {path: 'logout', component:LogoutComponent},
      {path: 'main-page', component:MainPageComponent},
      {path: 'create-workout', component: CreateWorkoutComponent},
      {path: 'delete-workout', component: DeleteWorkoutComponent},
      {path: 'modify-workout', component: ModifyWorkoutComponent},
     // {path: 'create-workout-details', component: CreateWorkoutComponent},
      {path: '**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
