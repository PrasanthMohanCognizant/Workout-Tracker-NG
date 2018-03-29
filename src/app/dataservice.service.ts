import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { IWorkout } from './workout';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DataserviceService {

  private subject = new ReplaySubject<any>();

  sendWorkoutDetails(workout: any){
    console.log("In send service");
    this.subject.next({workout: workout});
    console.log(workout);
  }

  getWorkoutDetails(): Observable<any>{
    console.log("In get service");
    return this.subject.asObservable();
  }

}
