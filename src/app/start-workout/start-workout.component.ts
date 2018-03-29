import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { CategoryService } from '../category.service';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { BOOL_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-start-workout, date-pipe',
  templateUrl: './start-workout.component.html',
  styleUrls: ['./start-workout.component.css']
})
export class StartWorkoutComponent implements OnInit {

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

  onStartWorkout(comment, startDate, startTime){
    const obj = {
    id: this.workout.id,
    title: this.workout.title,
    note: this.workout.note,
    calories_burnt: this.workout.calories_burnt,
    category_id: this.workout.category_id,
    start_date: this.today,
    start_time: this.today,
    end_date: this.workout.end_date,
    end_time: this.workout.end_time,
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
