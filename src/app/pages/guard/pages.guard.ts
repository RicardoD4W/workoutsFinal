import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor(private authService : AuthService, private router: Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return true;}
      
      if(this.authService.isLoged()){
        return true;
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Solo el usuario administrador puede acceder a estas opciones',
          showConfirmButton: true,
          timer: 1500
        })

        //alert('Solo el usuario administrador puede acceder a estas opciones');
        this.router.navigate(['/pages/login']);
        return false;
      }
  }
  
}
