import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReferenceComponent } from './student-reference.component';

describe('StudentReferenceComponent', () => {
  let component: StudentReferenceComponent;
  let fixture: ComponentFixture<StudentReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentReferenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
