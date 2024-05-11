import { Course } from "./Course";
import { User } from "./User";

export interface Group {
    id: number;
    group_name: string;
    course: Course; // Предполагается, что у вас есть интерфейс для модели Course
    students: User[]; // Предполагается, что у вас есть интерфейс для модели User
    created_at: string; // Формат даты зависит от предпочтений и формата, используемого на сервере
    updated_at: string; // Формат даты зависит от предпочтений и формата, используемого на сервере
  }
  