import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  public workouts: Object;

  searchTerm = new Subject<string>();

  constructor(private _workoutService: WorkoutService) { 
      this._workoutService.getWorkouts(this.searchTerm)
          .subscribe(workouts => {
            this.workouts = workouts
          });
  }

  ngOnInit() {
    this.workouts = this._workoutService.getAllWorkouts()
                        .subscribe(data => this.workouts = data);
  }

}
