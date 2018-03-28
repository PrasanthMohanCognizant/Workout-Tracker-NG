import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public categories = [];

  public calories:number = 10;

  private workoutCategory:string;

  constructor(private _categoryService: CategoryService, private _workoutService: WorkoutService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this._categoryService.getCategories()
        .subscribe(data => this.categories = data);
  }

  plus(){
    this.calories =+10;
  }

  minus(){
    this.calories =-10;
  }

  addWorkout(workoutTitle,workoutNote,workoutCalories){
    console.log(this.workoutCategory,workoutTitle,workoutNote,workoutCalories);
    const obj = {
      category_id:this.workoutCategory,
      title: workoutTitle,
      note: workoutNote,
      calories_burnt: workoutCalories
    }
    console.log("call service");
    this._workoutService.addWorkout(obj);
  }

}
