import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutElement } from 'src/app/interfaces/workout.interface';
import { WorkoutsService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-modify-workout',
  templateUrl: './modify-workout.component.html',
  styleUrls: ['./modify-workout.component.css']
})
export class ModifyWorkoutComponent {
  workouts!: WorkoutElement[];
  workoutsCopia!: WorkoutElement[];


  ngOnInit(): void {
    this.getData();
   }

  constructor(private service: WorkoutsService, private router : Router) {
    this.getData();
  }



  getData(){
    this.service.getAllWorkouts().subscribe((res) => {
      this.workouts = res.workout;
      this.workoutsCopia = res.workout;

    });
  }

  filtrar($event : any){
    $event.preventDefault();

    if($event.target.value.length > 1){
      this.workouts = this.workoutsCopia.filter((value : any) => value.nombre.toLowerCase().includes($event.target.value.toLowerCase()))
    }else{
      this.workouts = this.workoutsCopia
    }

  }
}
