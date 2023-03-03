import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logued! : boolean;

  constructor() { }

  isLoged() : boolean{
    return this.logued;
  }


  login(user:string, pass:string):Observable<boolean>{
    if((user=='admin') && (pass=='admin')){
      this.logued = true;
      console.log('logueado admin?', this.logued);
      return of(true);
    }else{return of(false)}
  }

  logout():void{
    this.logued = false;
  }
}
