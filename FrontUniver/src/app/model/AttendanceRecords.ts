export interface AttendanceRecord {
  id: number;
  attendance: number;
  course: number;
  created_at: Date;
  reason: string;
  course_name: string;
  username: string;
}
