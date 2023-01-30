import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  URL : string= 'http://localhost:3000/api/v1/workouts';
  constructor(
    private _http : HttpClient
  ) 
  { }

  data! : {} ;

  getAllWorkouts() : Observable<any>{
    return this._http.get(this.URL)
  }



  /*
  constructor(private HttpClient : HttpClient) { }

  private endPoint : string = 'https://restcountries.com/v3.1/';
  paisBuscado : Pais[] = [];

  buscarPais(name : string) : Observable<Pais[]>{
    return this.HttpClient.get<Pais[]>(`${this.endPoint}name/${name}`);
  }
  buscarCodigo(name : string) : Observable<Pais[]>{
    return this.HttpClient.get<Pais[]>(`${this.endPoint}alpha/${name}`);
  }
  buscarRegion(name : string) : Observable<Pais[]>{
    return this.HttpClient.get<Pais[]>(`${this.endPoint}region/${name}`);
  }
  buscarCapital(name : string) : Observable<Pais[]>{
    return this.HttpClient.get<Pais[]>(`${this.endPoint}capital/${name}`);
  }

}
*/

}
