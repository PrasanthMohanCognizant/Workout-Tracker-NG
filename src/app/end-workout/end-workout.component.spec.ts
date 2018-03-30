import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndWorkoutComponent } from './end-workout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataserviceService } from '../dataservice.service';
import { CategoryService } from '../category.service';
import { WorkoutService } from '../workout.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EndWorkoutComponent', () => {
  let component: EndWorkoutComponent;
  let fixture: ComponentFixture<EndWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndWorkoutComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataserviceService, CategoryService, WorkoutService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
