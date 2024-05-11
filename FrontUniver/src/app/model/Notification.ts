export interface Notification {
    id?: number; // Необязательный идентификатор
    student: string; // Имя студента
    text: string; // Текст уведомления
    updated_at?: Date; // Дата обновления (необязательно)
  }
  