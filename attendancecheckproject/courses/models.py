from django.db import models
from users.models import User


class Course(models.Model):
    course_name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)


class Group(models.Model):
    group_name = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    students = models.ManyToManyField(User, related_name='groups_of_student', blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)


class Lesson(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    lesson_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)


class AttendanceType(models.Model):
    title = models.CharField(max_length=255)


class LessonAttendance(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    attendance_type = models.ForeignKey(AttendanceType, on_delete=models.CASCADE, default=2)


class Reference(models.Model):
    is_approved = models.BooleanField(default=False)
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reference_of_student')
    teacher = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reference_of_teacher')
    file = models.FileField(upload_to="upload/references/", null=True, blank=True)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    is_done = models.BooleanField(default=False)

class Notification(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    # teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True, blank=True)


class AttendanceRecord(models.Model):
    attendance = models.ForeignKey(LessonAttendance, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)  # Add this line
    reason = models.CharField(max_length=255, null=True, blank=True)
    course_name = models.CharField(max_length=255, null=True, blank=True)
    username = models.CharField(max_length=255, null=True, blank=True)

class StudNotifications(models.Model):
    email = models.EmailField(null= True, blank=True)
    # data = models.DateTimeField(auto_now=True)
    course_name = models.CharField(max_length=255,null=True, blank=True)
    accept = models.CharField(max_length=255,null=True,blank=True)
