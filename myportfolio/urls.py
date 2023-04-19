from django.urls import path
from . import views
from .views import Index


urlpatterns = [
    path("", Index.as_view(), name="index"),
    path("resume/", views.resume, name="resume")
]
