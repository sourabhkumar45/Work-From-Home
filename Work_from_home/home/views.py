from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    obj = user.objects.get(id=2)
    context = {
        'name': obj.name
    }
    return render(request, 'index.html',context)
    