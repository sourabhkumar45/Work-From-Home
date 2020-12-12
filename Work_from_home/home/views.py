from django.shortcuts import render, HttpResponse
from home.models import user
# Create your views here.
def index(request):
    User = user.objects.get(id=1)
    context = {
        'name':User.name
    }
    return render(request, 'index.html', context)
    