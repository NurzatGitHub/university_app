import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherNotificaitonComponent } from './teacher-notificaiton.component';

describe('TeacherNotificaitonComponent', () => {
  let component: TeacherNotificaitonComponent;
  let fixture: ComponentFixture<TeacherNotificaitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherNotificaitonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherNotificaitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
