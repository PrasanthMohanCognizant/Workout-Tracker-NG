import { Injectable } from '@angular/core';
import { IWorkout } from './workout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class WorkoutService {

  private _url: string = "http://localhost:8080/api/workouts";
  private _queryUrl = "/search?title=";

  constructor(private http: HttpClient) { }

  getWorkouts(terms: Observable<string>) {
    return terms.debounceTime(400)
                .distinctUntilChanged()
                .switchMap(term => this.searchWorkouts(term));
    
    
  }

  searchWorkouts(term){
    return this.http
        .get(this._url + this._queryUrl + term)
        .map(res => res); 
  }
   
  getAllWorkouts(){

    return this.http.get<IWorkout[]>(this._url);

  }
  

  addWorkout(workout){
    console.log("In service");
    this.http.post(this._url+"/workouts", workout).subscribe(res => console.log('Done'));
  }

}
