import { Pipe, PipeTransform } from '@angular/core';
import { WorkoutElement } from '../interfaces/workout.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(workout: WorkoutElement[], page: number = 0): WorkoutElement[] {
    return workout.slice(page, page+  4);
  }


}
