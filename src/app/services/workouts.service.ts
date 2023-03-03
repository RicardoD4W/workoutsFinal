import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  URL : string= 'http://localhost:3000';
  constructor(
    private _http : HttpClient
  ) 
  { }

  data! : {} ;

  getAllWorkouts() : Observable<any>{
    return this._http.get(this.URL)
  }

  getOneWorkout(id : any) : Observable<any>{
    return this._http.get(`${this.URL}/${id}`)
  }

  getWorkoutsPremiun(){
    return this._http.get(`${this.URL}?premiun=true`)
  }

  postOneWorkout(body : any){
    return this._http.post(`${this.URL}/workouts/add`, body)
  }

  patchOneWorkout(body : any, _id : any){
    return this._http.patch(`${this.URL}/workouts/edit/${_id}`, body)

  }

  deleteOneWorkout(_id : any){
    return this._http.delete(`${this.URL}/workouts/delete/${_id}`)

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
