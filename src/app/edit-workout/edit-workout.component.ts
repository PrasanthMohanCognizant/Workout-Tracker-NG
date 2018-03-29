import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { IWorkout } from '../workout';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-workout',
  templateUrl: './edit-workout.component.html',
  styleUrls: ['./edit-workout.component.css']
})
export class EditWorkoutComponent implements OnInit {

  workout: any;
  subscription: Subscription;
  categories=[];

  constructor(private _dataService: DataserviceService
    , private _categoryService: CategoryService
    , private _workoutService: WorkoutService
    , private router: Router) { 
    this.subscription = this._dataService.getWorkoutDetails()
      .subscribe(result => {
        this.workout = result.workout
      });
      this.getCategories();
  }

  getCategories(){
    this._categoryService.getCategories()
        .subscribe(data => this.categories = data);
  }

  ngOnInit() {
    //this.dataservice.currentWorkout.subscribe(workout => this.workout = workout);
    //console.log("in it");
  }

  onUpdate(workoutTitle, workoutNote, workoutCategoryId){
    const obj = {
    id: this.workout.id,
    title: workoutTitle.value,
    note: workoutNote.value,
    calories_burnt: this.workout.calories_burnt,
    category_id: workoutCategoryId,
    start_date: this.workout.start_date,
    start_time: this.workout.start_time,
    end_date: this.workout.end_date,
    end_time: this.workout.end_time,
    comment: this.workout.comment,
    status: this.workout.status
    }
    this._workoutService.updateWorkout(obj);
    this.router.navigate(['./view-all']);
  }

}
