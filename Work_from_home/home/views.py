from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    # return HttpResponse("this is home page")
    context = {
        'variable':'this is sent',
    }
    return render(request, 'index.html', context)
    