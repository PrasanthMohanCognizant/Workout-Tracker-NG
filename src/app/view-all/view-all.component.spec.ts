import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllComponent } from './view-all.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataserviceService } from '../dataservice.service';
import { CategoryService } from '../category.service';
import { WorkoutService } from '../workout.service';

describe('ViewAllComponent', () => {
  let component: ViewAllComponent;
  let fixture: ComponentFixture<ViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllComponent ],

      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataserviceService, CategoryService, WorkoutService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
