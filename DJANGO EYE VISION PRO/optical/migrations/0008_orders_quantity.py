# Generated by Django 5.0.3 on 2024-04-14 12:59

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('optical', '0007_alter_contact_mobile_alter_contact_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='Quantity',
            field=models.CharField(default=django.utils.timezone.now, max_length=10),
            preserve_default=False,
        ),
    ]