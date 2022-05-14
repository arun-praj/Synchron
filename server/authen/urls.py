from django.urls import path
from . import views
from django.contrib.auth import views as auth_views, logout
from .forms import loginForm

urlpatterns = [
    path('', views.home, name='home'),
    path('profile/', views.profile, name='profile'),
    path('registration/', views.Registration.as_view(), name='registration'),
    path('accounts/logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='authen/login.html', authentication_form= loginForm), name='login'),
]