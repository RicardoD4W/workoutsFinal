import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutsService } from 'src/app/services/workouts.service';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modify-workout-details',
  templateUrl: './modify-workout-details.component.html',
  styleUrls: ['./modify-workout-details.component.css']
})
export class ModifyWorkoutDetailsComponent {
  protected oneWorkout! : any;
  public formGroup! : FormGroup;



  constructor(private formBuilder: FormBuilder, private login : AuthService, private router : Router ,private activeRouting : ActivatedRoute, private workService : WorkoutsService){}

  ngOnInit(): void {
    this.activeRouting.params.subscribe(({id})=>{
      this.workService.getOneWorkout(id).subscribe((res)=>{
        this.oneWorkout = res.workout;
        console.log(this.oneWorkout);
      })
    })
    this.buildForm();

  }

  private buildForm() {
    const nombre = '';
    const descripcion = '';
    const equipamiento = '';
    const consejos = '';
    const premiun = false;
    const grupo_muscular = '';
    const video_url = '';
    const imagen_url = '';

    this.formGroup = this.formBuilder.group({
      nombre: [nombre.toLowerCase(), ],
      descripcion: [descripcion.toLowerCase(), ],
      equipamiento: [equipamiento.toLowerCase(), ],
      consejos: [consejos.toLowerCase(), ],
      premiun: [premiun],
      grupo_muscular: [grupo_muscular.toLowerCase(), ],
      video_url: [video_url.toLowerCase()],
      imagen_url: [imagen_url.toLowerCase()],
      
    });
  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control?.touched && control?.errors != null) {
      error = JSON.stringify(control?.errors).replace('{', '').replace('}','').replace('""', '').replace('\n','').replace('\\', '');
    }
    return error;
  }

  onFormSubmit( loginForm: { value: { nombre: any; descripcion: any; equipamiento: any; consejos: any; premiun: any; grupo_muscular: any; video_url: any; imagen_url: any }; }):void{
    const workout = this.formGroup.value;

    const nombre = workout.nombre;
    const descripcion = workout.descripcion;
    const equipamiento = workout.equipamiento;
    const consejos = workout.consejos;
    const premiun = workout.premiun.toString();
    const grupo_muscular = workout.grupo_muscular.split(',');
    const video_url = workout.video_url;
    const imagen_url = workout.imagen_url;

    const body = {
      "nombre" : nombre == '' ? this.oneWorkout.nombre : nombre,
      "descripcion" : descripcion == '' ? this.oneWorkout.descripcion : descripcion,
      "equipamiento" : equipamiento == '' ? this.oneWorkout.equipamiento : equipamiento,
      "consejos" : consejos == '' ? this.oneWorkout.consejos : consejos,
      "premiun" : premiun == '' ? this.oneWorkout.premiun : premiun,
      "grupo_muscular" : grupo_muscular == '' ? this.oneWorkout.grupo_muscular : grupo_muscular,
      "video_url" : video_url == '' ? 
      this.oneWorkout.video_url 
      : video_url,
      "imagen_url" : imagen_url == '' ? this.oneWorkout.imagen_url
      : imagen_url
    }


    

    this.workService.patchOneWorkout(body, this.oneWorkout._id ).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      })

    })

    this.router.navigate(['/main-page']);

      

  }


}
