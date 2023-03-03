import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutElement } from 'src/app/interfaces/workout.interface';
import { WorkoutsService } from 'src/app/services/workouts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-workout',
  templateUrl: './delete-workout.component.html',
  styleUrls: ['./delete-workout.component.css']
})
export class DeleteWorkoutComponent implements OnInit {
  workouts!: WorkoutElement[];
  workoutsCopia!: WorkoutElement[];

  ngOnInit(): void {
    this.getData();
   }

  constructor(private service: WorkoutsService, private router : Router) {
    this.getData();
  }

  delete(_id : any){
    console.log(_id);
    
    this.service.deleteOneWorkout(_id).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado con éxito',
        showConfirmButton: false,
        timer: 1500
      })
        
      this.getData()
    })

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
