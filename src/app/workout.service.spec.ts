import { TestBed, inject } from '@angular/core/testing';

import { WorkoutService } from './workout.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataserviceService } from './dataservice.service';

describe('WorkoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutService],

      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([WorkoutService], (service: WorkoutService) => {
    expect(service).toBeTruthy();
  }));
});
