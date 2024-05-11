export interface LessonAttendance {
[x: string]: any;
    id: number;
    lesson: string; // или тип Lesson, если он определен в вашем проекте
    user: string; // или тип User, если он определен в вашем проекте
    attendance_type: string; // или тип AttendanceType, если он определен в вашем проекте
    created_at: string; // Формат даты зависит от предпочтений и формата, используемого на сервере
    updated_at: string; // Формат даты зависит от предпочтений и формата, используемого на сервере
  }
  