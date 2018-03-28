import { Injectable } from '@angular/core';
import { IWorkout } from './workout';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WorkoutService {

  private _url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getWorkouts() {
    return this.http.get<IWorkout[]>(this._url+"/workouts");
  }

  addWorkout(workout){
    console.log("In service");
    this.http.post(this._url+"/workouts", workout).subscribe(res => console.log('Done'));
  }

}
