# Generated by Django 5.0.6 on 2024-05-14 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_attendancerecord_notification'),
    ]

    operations = [
        migrations.AddField(
            model_name='attendancerecord',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]