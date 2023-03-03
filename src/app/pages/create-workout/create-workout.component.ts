import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {WorkoutsService} from '../../services/workouts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css']
})
export class CreateWorkoutComponent {
  public formGroup! : FormGroup;

  constructor( private formBuilder: FormBuilder, private login : AuthService, private router : Router, private service : WorkoutsService ) { }

  public ngOnInit() {
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
      nombre: [nombre.toLowerCase(), Validators.required],
      descripcion: [descripcion.toLowerCase(), Validators.required],
      equipamiento: [equipamiento.toLowerCase(), Validators.required],
      consejos: [consejos.toLowerCase(), Validators.required],
      premiun: [premiun],
      grupo_muscular: [grupo_muscular.toLowerCase(), Validators.required],
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
      "nombre" : nombre,
      "descripcion" : descripcion,
      "equipamiento" : equipamiento,
      "consejos" : consejos,
      "premiun" : premiun,
      "grupo_muscular" : grupo_muscular,
      "video_url" : video_url == '' ? 
      'https://i.pinimg.com/originals/5c/5d/66/5c5d6684644136c4b1442f1db30af6bf.gif' 
      : video_url,
      "imagen_url" : imagen_url == '' ? 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhAOEBQNDxAQEBUQEA8RDxsREBAQFRYXFhoVFRUYHykgGBolHxUTIjEhJSk3Ly4uFx8zOD8sNygwLi0BCgoKDg0OGxAQGzAlHyYuLS8vLS0tLS0rLS0vLTAtLS0rListKzAwLS0tMC0tLS0tLTItKy8vLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMEBQYCB//EAEUQAAICAQIDBQQGBwQJBQAAAAECAAMEBRESEzEGIUFRoSJhcZEUMlKBkrEHIyQzQoKiFWJywRYlQ2SDssLD0yZTk6PR/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EADERAAIBAQQJAgcAAwEAAAAAAAABAhEDBCExEkFRYXGBkaHwE7EFFCLB0eHxMkJSBv/aAAwDAQACEQMRAD8A+HGRJMiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIBenQRCdBEApMiSZEAREQBERAEREAREQBERAEREAREQBESdoBET1tJ2k0IqeInvgk8uKMVRXEt5ccuTosaSKolnLjgkaLFUVxPfBHLMUYqjxEsNZlcNUJEREgCIiAXp0EQnQRAKTIkmRAEREAREQBERAEREAREkCAREsCz2tc9KLZDlQrCz0K5kpTMivGlsbFsqlapGCtM9rjzc06eT4TNp0knwM1wuUmZbS+RjmznlxZauIZ2eD2Wvf6lVj/4UJm2q7CZI+utdY87LVTb7mO8vVzSzaXNFDvtcYpvkz5yMMywYRn0j/RPHT99lYye5QbD6Db1kf2fpafWtyrj9lK1Rfxd59JZ8pHf0f8KnfXXV1XtWp85+gnykjTz5T6D/AGhp6fu8LmeXOvZ/RAs8Xdp7UH6mjDxx5rjhj+J9zJ+UWzzlUK9y8/dDisbQLrDtXXa58lQn8ptqv0fZxHE1LVL9q5hSPm5Eu1Dtpnt3HIuA+yjcC/JdhOdytVsYkszsT1JYmUSVjHPz2NEXbSy89zov9Ca078jM06j3C3nt8qwYOk6Mn7zMybT5UY2wP8zMPynG2ZZmM95lTvFnHKPnMtVhOWb/AD2N92iswiQMRb1UD2uc4ZmbzHCBsPdObM9M5lcx21rputKGuys9BUEREpLBERAL06CIToIgFJkSTIgCIiAIiIAiIgCIntRAAEsVJn6XpVtzLXUj2Ox2CqvEx+4TqV/R3n7fUr4v/b+kLzfhwb77+6a7O7Skqme0t4xwONRJkVUzY4+j2m4YwR+aW4OXt7XFvtttOtXR8DHPLyLL8m9fr04igpWfI2Hqfu29802V3bM1peEtZxddE2GPjzortLxL6rbcI3h6F47aLtixr32LIy9du7cETPys6jEpw+HGxrbLsYWvZYGYhmZgNhxcO2wXwmqEIxzMk7SUsEY2jZtNS7Pj0XuTuGsLeyPIKrAH750OLqmc/wC4pVB4crEUH8XDv6zGux1uy9NPDWi30LdYEUImyk8Z2Hd0UyvQ+0mRkalWGsuNXNawVlzwBF3OwHTYbTQ7RUq11/HXYZfSlXOnDDv7Z56jPrs1C5eYXbg3K8VlwrXdeo9pgO6Utpbg3c62mlaRWXcksv60brtwA77iajtFkn6Ppq+NjWW//JcR/lNt2yu4adTPnl4+OP8AhVvv/lLHbOFaYLHJbGuWVdRUrqp0cqt4Z70/vvMLK03bJx6A4sryeWa7VG3ErHbcA+R3H3S7OxcM0ZbUpfx49iVB3sBDszbdygeQPjPfYe5chMJj9fAyhxefIs3I+4FT+OV9jRzEIbvGRrFW/vWtbHMr9VyVW9n59lyNCu6jhT9eN9j1j4/IsTDorptzinHfdcA1WONuIgK3duB1J6Hp76dV1vMoal7bsbNxbyV2CA1nhIDLsVBUjcd48xtNfoeVZb/bV4DPYamVdhuxey9V2HvIJm007RGsw8WjJxNR4sd3s7imPWS3D1d/co8JW3/151y6786UvUFqOI7dYCUZV1Ve/LBDV79eBwGXf7iJyT2TrP0j32NmXcxDSy8KcsuHKhVCgcQ7j3ATjSZybzJ6Z07tH6Eey08byImNmkREQBERAEREAvToIhOgiAUmRJMiAIiIAiIgCIiAJkYqbmY82Wkpu6DzYD5mW2MdKaRXay0YNn0nFx3oGHpWMeVlZyo+VeO51S36qA9QvDsx89/dMDW8DE+jWZWIckHGylx2e2wNzuIEiwAD2fqnu3PWbjf/ANQW+WPXZt7uRSf/AMmk7P6o4psxhhDND5HOHFx8PEAVG4QjfqfnO1i15w7UOXr88yzOmzbeDHbWCP2g6XWiufrc97Hq4t/tcFZ7/M7zV6dm242Lp/0djXdnXu9tg+uyK4UIT5b8RI8d5br+Te+m3i+lcVvpGPSlCqUCVVra4GzHf+Pf757qxd7+z9H2a0Y/z3M35SW17ecnkQks+J5wuFdV1RUAWtKc32R04QjgDb5TMfTEyMxcZxxCjRlcDys5HED+Iia3Qd2u1fI+1TZ87LFX/Mzq9Gq21PObwWvHwx8C9VZHyBjFReG3zuE02uXsajEbgwMfM/jq06zETz5t2QyDb+U2fKZGRjijUKKgAPomkWM5A/2nJYkn37mYuh5ddlWFpx61Zdt+SCOlNRLgb/jlupsWzNTtb6y6VWh/xOtaH1Yz29Jya488afk8JxSVN3t/DS6vVxX6Ni+WPSCPe78X+cv7aZXFQ3+9a1eR7wvAB/zGZD1b65hDwppxQf8Ah1Kx/IzEzaDYmj1HvNuXdaffx38P/RPKpi5Pxo9SeqPDo6LsZmv5aaXmtbSm+Lk4r0mpe4C1d62+8WJxfLznrsS22Nht9rIzsj7qsbu/OY3ao/S6dR8Xws5r08+RaeFvuDBfnLtGvSmvR0sIRLaMtHY9F55NPEfcNp5WDxyp5zy6lmg9W3t/KmD+j3UK8ajMzbeLgXKoQlRu3fxuNgSN+9VPXwmH2iwlGTgrVblWLlJXaRe27DjcgDYHYdwHzmVo+l5NHPwL8K/KqtsSwKhK7vXxBWDgEFSC3xBm4u0MtmYmbbfgotVlYupF6quMlRXapATvZsoHePHfxhN5x3ds/v8AsONHR7z59+ki7iz8w/7w4HwDbD8pyM6HtK/Mvus+3azfNiZoyk415kvUZ1LCzkrNFUT2VnmUntqhEREECIiAIiIBenQRCdBEApMiSZEAREQBERAESQJYqyUqkNnkLOh7I4obJx1PRrkB/EJpq1m40e/lujjuKsGB94O82XaNJpma8Seg0j6DhDfUtWu8RTlkDx9oMv5MZ4RsinC07Hoe6p8i2y1lRipdWZVG+3XvRpkVmm286hiZWPi2WbtZVeCCjsPbA6qUPf8AcdtpdfqtNTnIe/6dm7cNbqpWmjwBXcAkjwG2w986sY7fM+2+urhXlTm5Zeffbq9mZXbaoWY7Kp4hTmCuw9e9Ka6wf6Gl1NdQsxdQ5lXDj4qItfF+sNqqVC8PUDi7/LaaXs3l3FrErrOStv72rhLcWx34jt3gjz3m6yS1Cm1MJF4erluaqfFd9h/NDtLKP0t+3THItVzvk1pxh79VTP8AJiaXp3KpKt3WZ96Kq+PJV+Ik/wA3Dt/hM21BKXZmSwZRZqFIUkbBlV2PcfEeyJymHm5GVfxBibB7ZsJCrWq/xE9FUTNz9VxD7N+Tl5TDqa1/VA+53O5/CJVbXqzi86vXTisui45mm5/CLzax0slqrz/vZGWNNbEbPvfgQuDVRu68RFlgDNw77gcHF3++etcegHUbBdRYcoolaVlmYVrYrbseHboo6Gc5q1NZqOVjWvbUHCWBxw21sd9uIbkcPcdmB8O/aX0cGNXS9ic7LyBxU0NuVRCdg7qPrFjvsOm3ed9wJitPicIqqz6bOOzuzrXf/wA9OUqTeG7nw1bdS4V22Rm4S5dmcrZNlh4+BOUFRd0KDclt+7cfKYmJrNIGJ+ztbfiqqVMbTw8fGXBCKNySzec9alnajSjWm3F4amC21U8H6pjvsr1qOEdCPiNjLtJNdl+l5aoiC6/a1UXZA9TIzMq/wgq9Z2HcDvOdP4naf4xWz8fc7ll8CuqWk3VY5OuSbo8FTBcOxgLjZuK1uWamrW3dHFtfEp4zvsyN7x3bjwjIofLRMnJvxsZATVUGRgN12chVqQ93tjy6yjs5nC2+7Dbv+lK9anoOfxcSbfzqg+BM86kG+jabT3g25FpI9/Etf/bMxyvltJUrv7+M6sfh11s5rBVqlVLVR5VrjWNO9NRRreVk4zWYfPtZE2GyuwQ7gH6p+M5W7IPf3zcdvsvfOy/dkWKPgrHb0E5K3IlkbW1lmzl3lWEMopOirhTGmJZkWbzEcyHulLPLUm8zlWtrHUSxngwTPMsMjdRERB5EREAREQC9OgiE6CIBSZEkyIAiIgCIiAegZ7VpVElMihkLZLkv2mHvI3ntWjR5dmmbdNQI8Zt+ztb5GRVjqfatcICegBPU+4Tkd51XYHUEpzMeywkJx8Lt9kMOHi+7feTaXmajgy653azdsqrzzsdmupC98jGpd8bTcKtntasfrbwrBeNu8buWYbAnYb+6eadOzaMup8EZGTS1dVxYjdeVagcpd4dG2O52mgotfTsq+rJr5lF4au0A7CylyGDK3j4MD7hMrtYuUaUvpybsnA7kT2yDQVHdW6b+wdh3Hodu6YfVllXB+dT6NqOOeD/myqa34rembPtiy4lTY+OR+25lxLht98ZLCla7+I3Dn37L5TPxcgJm1aSiUnH+ib5G9Sl3sNJdmLEbjhJO2x7thOa7W1kHSMfrw4tfx9uxn/6hN0zf661OxT3UY2WF+IqZB6kTw23nxLU02+fsmnxphXganslu9GqIOhSoD78mkD0LTcI++vMo24MQsKx4KuMuy/JUExP0Y1bpkbj99m4lPx4nLkf0Sjs/cW1DUckfwUZjfNXUf80imNeB69T6MsMe8U13SoY2n5X+r9WtJ3LX0puepJNjf9udD2UH7Ppx8k1DJP8AJjoAfmk5dfZ0a3ztzx8kRv8AyTqdPXl4dJP+z0a+34G616/yIkaOzyn9PXrOTbpWv3i1+jk8LTbRjPq6NsKcpUO31hxEni+AK7TrNWyqr8/RlqKsj8F7ID9Sy66yx1O3Tbi2+Up7I7HAxsN+4albmUr734KWr/8AsUes5j9HtRTUqt9/2fmOQfDlqzSUliVSlKib11fbGu/B9jR9qMvmZGQ/nc5/qM0haZeoNu7n++35zBmqzX0o4F9lW2kt7ERE9mQREQBERAEREAREQC9OgiE6CIBSZEkyIAiIgCIiAIiTAIiews9LXIqelFs8ATcaLo197cuhLLG232Qb7DzPkPfNclU7bsFcOPIxmYVrl47UK5bh4bN+NBv4Asi9/vlVpaUWB0LldlKf1HRY+mWLiijU7MW7HFiULy7RZk4dloYhgw3HD3MShPyJ3mo7LYb0Z2VpdmzV2pdRaN914lDFXHvDICD7pfoyXYwtwsnEyMkNetoTcqwtTiVSfNSGO48e7YiZt/FjtkZ+VwjOyRYKscfWq53FxWOv8HczAKe/v38O/Lp0O87JujWeryreGtvDBOtcTE1tR/aunq3sotGGu56cPKr3PqZeabKm1vMuV6w3HQnENuO2ywHhXfrsoc/dMexsfLqoN9pxsqhBVzSpNdqJ9TfhBYHbu6EbATJvbHPA2Vl36hyhtXSgZU+BezYr0+ztI08KFvyzcq0fR7KZ5Y8cMK0dSzsfauLRp/MPB9K1Fbzv/DVVugY+7drPwGajSiuLlZ+NlFquet2OX4S3ASdwxUd5G4HTwMw9Zy7L7BayhAoC1oo2WlVGyqB4bTPq7UNwhcijEyioCpbbWeMKBsN2TYtt/e3kadSJXdxVGvMsOu7LkW24SZC42mYbM9OOz3ZGY68FfEQoZjv0QKi9/Xr5gTZ1O2WNVXER3RMarBorC95rSxPbPluFJPxnM6p2nyLUNI5VFO+/KoQVqSPtgDdvixM0C5LKCASAeoB6/Ge0myic4wfm2u7tTXSqap1naNbMSjSaW2S7HL3MoYMVY2HrseuyKdvfNqbsCvKydTXKp3vx7eDFVXNi2X0kHv4eEbO58egnzW64mY72mWem2jJK+wi8vHnt86nnK6mYxEsdpWZpRw7V6UmzzERPRSIiIAiIgCIiAIiIBenQRCdBEApMiSZEAREQBESxRBKVSAJYtc32hdmrsriNXJATbja25KlXf3uRN0OyVCd9+dg1nxStmuf+hSPWUytUsDp2Xw6ckmcYlMyK8edhXiaNV9a7OyfILUtK/jLMf6ZK63pyHerBViPHIvL7/EIEEpdo3kb7O42cf8n5zaZzNWH7jNxpeiZFp2qrtsbyRCzflNi/bS0d1FeDjj+7joz/AInBb+qY2X2tzLBwWX5Dr9hrCR9w37pVJyZvso2UMVTr9qfc6bHwdWWvlNdZRUBty7csUgD/AAu4PpMWzQqAf1uZQxPewrFlr7/coT+qcj9PPmZ5OfK9F7POVDYrzZr/AG6JL30jsRXplY72yr2HgAlO/wA2s/KVf21hVn9XiI3vutew/JSg9Jxr50ofMhWciud/sktb5tdo0XY6rUu01liNUExK0bbda8dFY7Hce2Bxes5u66YT5Eoe+XQsaHMtviEWqJURk2Wyh7JjtbK2smiNmcq1vVSxnlbNPBMjeWqJjla1JJniInopbEREAREQBERAEREAREQC9OgiE6CIBSZEkyIAiIgEz0pniIJToZqZRA2kfSDMXeN550EX/MzpSpl84z1z5hbyeKRoE/My2mZz458w+KOKRoIn5mRlnInk3zF3jeT6aId5kZJvlZtlESdFFbtpMtLzyWniJNDw5NnreeYiSeRERAEREAREQBERAEREAREQBERAL06CIToIgFJkSTIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAXp0EQnQRAINDeXqJHIby9RJiARyG8vURyG8vUSYgEchvL1EchvL1EmIBHIby9RHIby9RJiARyG8vURyG8vUSYgEchvL1EchvL1EmIBHIby9RHIby9RJiARyG8vURyG8vUSYgEchvL1EchvL1EmIBHIby9RHIby9RJiARyG8vURyG8vUSYgEchvL1EchvL1EmIBHIby9RHIby9RJiARyG8vURyG8vUSYgEchvL1EchvL1EmIBHIby9RHIby9RJiARyG8vURyG8vUSYgFiVnYd3rJiIB//Z' 
      : imagen_url
    }


    

    this.service.postOneWorkout(body).subscribe(()=>{
      Swal.fire({
        icon: 'success',
        title: 'Creado con éxito',
        showConfirmButton: false,
        timer: 1500
      })

    })

    this.router.navigate(['/main-page']);

      

  }
}
