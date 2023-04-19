from django.shortcuts import render
from .models import Websites
from django.views.generic import ListView

# Create your views here.

class Index(ListView):
    model = Websites
    template_name = "index.html"
    context_object_name = 'websites'
  
  
def resume(request):
    return render(request, 'resume.html')