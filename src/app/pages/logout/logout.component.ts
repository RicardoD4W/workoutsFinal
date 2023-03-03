import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private aurhservice : AuthService, private router : Router){}


  public logout(){
    Swal.fire({
      title: '¿Quieres desloguearte?',
      showDenyButton: true,
      confirmButtonText: 'Sí, desloguéame',
      denyButtonText: `No, permanecer logueado`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.aurhservice.logout();
        Swal.fire('Logout!', '', 'success')
        this.router.navigate(['/pages/login']);
      } else if (result.isDenied) {
        
      }
    })


  }
}
