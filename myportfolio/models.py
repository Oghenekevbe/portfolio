from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.
class Websites(models.Model):
    desktop = models.ImageField(blank=True, null=True)
    mobile = models.ImageField(blank=True, null=True)
    name = models.CharField(max_length=255)
    description = RichTextField()
    address = models.URLField(max_length=200)

    def __str__(self):
        return self.name + ' | ' + self.address

    class Meta: 
        ordering = ['-id'] 
