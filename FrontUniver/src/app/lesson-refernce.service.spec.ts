import { TestBed } from '@angular/core/testing';

import { LessonRefernceService } from './lesson-refernce.service';

describe('LessonRefernceService', () => {
  let service: LessonRefernceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonRefernceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
