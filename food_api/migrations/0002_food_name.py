# Generated by Django 3.0.5 on 2020-04-08 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='food',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
    ]