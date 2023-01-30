import { Component } from '@angular/core';
import { WorkoutsService } from 'src/app/services/workouts.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

workouts! : {}

  constructor
  (
    private service : WorkoutsService,
  )
  {
    this.service.getAllWorkouts().subscribe((res)=>{
      this.workouts = res;
      console.log(this.workouts);
      
    })
  }
}
