from django.contrib.auth.decorators import login_required
from .forms import registrationForm
from django.views import View
from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt,csrf_protect 
from .models import roles
from django.contrib.auth.models import User

class Registration(View):
    '''
        Registration form for user.
        Used a custom template rather than using a buildin template.
    '''
    def get(self, request):
        form = registrationForm()
        return render(request, 'authen/registration.html', {'form': form})
        
    @csrf_exempt
    def post(self, request):
        form = registrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user.set_password(password)
            user.save()
            '''
                Login the user after registration.
            '''
            user = authenticate(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('dj/profile')
        return render(request, 'authen/registration.html', {'form': form})

def home(request):
    return render(request, 'authen/home.html')

@login_required
def profile(request):
    user_info=User.objects.get(username=request.user)
    return render(request, 'authen/profile.html', {'user_info': user_info})
# Create your views here.
