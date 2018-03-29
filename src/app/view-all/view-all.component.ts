import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { DataserviceService } from '../dataservice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  public workouts: Object;

  public workout:any;

  searchTerm = new Subject<string>();

  constructor(private _workoutService: WorkoutService, private _dataService: DataserviceService) { 
    this._workoutService.getWorkouts(this.searchTerm)
    .subscribe(workouts => {
      this.workouts = workouts
    });
  }

  ngOnInit() {
    this.workouts = this._workoutService.getAllWorkouts()
                        .subscribe(data => this.workouts = data);
  }

  getAllWorkouts(){
    this.workouts = this._workoutService.getAllWorkouts()
                        .subscribe(data => this.workouts = data);
  }

  onEditWorkout(workout){
    console.log("on edit");
    console.log(workout.title);
    this._dataService.sendWorkoutDetails(workout);
    
  }

  onStartWorkout(workout){
    console.log("on start");
    console.log(workout.title);
    this._dataService.sendWorkoutDetails(workout);
    
  }

  onEndWorkout(workout){
    console.log("on end");
    console.log(workout.title);
    this._dataService.sendWorkoutDetails(workout);
    
  }

  onDeleteWorkout(workout){
    console.log("on delete");
    console.log(workout.title);
    this._workoutService.deleteWorkout(workout)
      .subscribe(res => {
        console.log('Done');
        this.getAllWorkouts();
      });
    
  }

}
