import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkoutComponent } from './edit-workout.component';
import { DataserviceService } from '../dataservice.service';
import { CategoryService } from '../category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WorkoutService } from '../workout.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditWorkoutComponent', () => {
  let component: EditWorkoutComponent;
  let fixture: ComponentFixture<EditWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkoutComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataserviceService, CategoryService, WorkoutService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
