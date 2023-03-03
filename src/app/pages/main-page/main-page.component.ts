import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { HttpClient } from '@angular/common/http';
import { WorkoutElement } from 'src/app/interfaces/workout.interface';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  workouts!: WorkoutElement[];
  workoutsCopia!: WorkoutElement[];

  page: number = 0;

  getData() {
    this.service.getAllWorkouts().subscribe((res) => {
      this.workouts = res.workout;
      this.workoutsCopia = res.workout;

    });
  }

//   ngAfterContentChecked(): void {
//   this.getData();
// }

  constructor(private service: WorkoutsService) {
    this.getData();
  }

  next() {
    if (this.page + 4 >= this.workouts.length) return;
    this.page += 4;
  }
  previus() {
    if (this.page == 0) return;
    this.page -= 4;
  }
  premiun($event: any) {
    this.page = 0;
    if ($event?.target?.checked) {
      this.service.getWorkoutsPremiun().subscribe((res: any) => {
        this.workouts = res.workout;
      });
    } else {
      this.getData();
    }
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
