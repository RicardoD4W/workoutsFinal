import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  public formGroup! : FormGroup;

  constructor( private formBuilder: FormBuilder, private login : AuthService, private router : Router ) { }

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const name = '';
    const minPassLength = 3;
    this.formGroup = this.formBuilder.group({
      name: [name.toLowerCase(), Validators.required],
      email: ['admin@admin.com', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(minPassLength)
      ]]
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


  onFormSubmit( loginForm: { value: { username: any; password: any; }; }):void{
    const user = this.formGroup.value;
    console.log(user.name, user.password);

    this.login.login(user.name, user.password).subscribe((res)=>{
        res 
        ?
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido administrador',
          showConfirmButton: false,
          timer: 1000
        }) 
        :
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado con éxito',
          showConfirmButton: true,
          timer: 1500
        })       })
      

    this.router.navigate(['/main-page']);
  }
}
