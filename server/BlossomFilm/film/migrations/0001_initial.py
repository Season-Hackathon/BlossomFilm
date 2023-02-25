# Generated by Django 4.0.4 on 2023-02-24 12:02

from django.db import migrations, models
import django.db.models.deletion
import film.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Film',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('film1', models.ImageField(blank=True, default='', upload_to='film_photo')),
                ('film2', models.ImageField(blank=True, default='', upload_to='film_photo')),
                ('film3', models.ImageField(blank=True, default='', upload_to='film_photo')),
                ('film4', models.ImageField(blank=True, default='', upload_to='film_photo')),
                ('frame_background', models.ImageField(blank=True, default='', upload_to='frame_photo')),
            ],
        ),
        migrations.CreateModel(
            name='MyPhotoFrame',
            fields=[
                ('frame_background', models.ImageField(blank=True, default='', upload_to='frame_photo')),
                ('frame_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Frame',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frame_image', models.ImageField(upload_to=film.models.upload_to_func)),
                ('title', models.CharField(blank=True, default='', max_length=512)),
                ('film', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='film.film')),
            ],
        ),
        migrations.AddField(
            model_name='film',
            name='myPhotoFrame',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photo_film', to='film.myphotoframe'),
        ),
    ]
