import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { CategoryService } from '../category.service';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-workout',
  templateUrl: './end-workout.component.html',
  styleUrls: ['./end-workout.component.css']
})
export class EndWorkoutComponent implements OnInit {

  today = Date.now();
  workout: any;
  subscription: Subscription;

  constructor(private _dataService: DataserviceService
    , private _categoryService: CategoryService
    , private _workoutService: WorkoutService
    , private router: Router) { 
    this.subscription = this._dataService.getWorkoutDetails()
      .subscribe(result => {
        this.workout = result.workout
      });
  }

  ngOnInit() {
  }

  onEndWorkout(comment, startDate, startTime){
    const obj = {
    id: this.workout.id,
    title: this.workout.title,
    note: this.workout.note,
    calories_burnt: this.workout.calories_burnt,
    category_id: this.workout.category_id,
    start_date: this.workout.start_date,
    start_time: this.workout.start_time,
    end_date: this.today,
    end_time: this.today,
    comment: comment.value,
    status: true
    }
    this._workoutService.updateWorkout(obj);
    this.router.navigate(['./view-all']);
  }

  onCancel(){
    this.router.navigate(['./view-all']);
  }


}
