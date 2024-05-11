import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudAbsenceComponent } from './check-stud-absence.component';

describe('CheckStudAbsenceComponent', () => {
  let component: CheckStudAbsenceComponent;
  let fixture: ComponentFixture<CheckStudAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckStudAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckStudAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
