# Generated by Django 4.0.4 on 2022-05-13 10:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('standup_card', '0003_alter_standupcard_syncup_board_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='update',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
