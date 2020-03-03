import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http:HttpClient) { }

  getStudentData():Observable<any>{
   return this.Http.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=47bd98cb8b8773fa3e9c10c3616fc10c');
  }
}
