import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  public workouts = [];

  constructor(private _workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(){
    this._workoutService.getWorkouts()
        .subscribe(data => this.workouts = data);
  }

}
