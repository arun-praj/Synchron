from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UsernameField
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class registrationForm(UserCreationForm):
    '''
        Registration form for user. 
        Develover can use a custom form to change the form.
    '''
    password1= forms.CharField(label='Password', widget=forms.PasswordInput(attrs=
    {'class':'form-control'}))
    password2= forms.CharField(label='Confirm Password (re-enter password)', widget=forms.PasswordInput(attrs=
    {'class':'form-control'}))
    email = forms.EmailField(required=True, label= 'Email', widget=forms.EmailInput(attrs={'class':'form-control'}))
    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
            'password1',
            'password2'
        )
        widgets = {
            'username': forms.TextInput(attrs={'class':'form-control'}),
            'first_name': forms.TextInput(attrs={'class':'form-control'}),
            'last_name': forms.TextInput(attrs={'class':'form-control'}),
        }
        def save(self, commit=True):
            user = super(registrationForm, self).save(commit=False)
            user.first_name = self.cleaned_data['first_name']
            user.last_name = self.cleaned_data['last_name']
            user.email = self.cleaned_data['email']
            if commit:
                user.save()
            return user

class loginForm(AuthenticationForm):
    username = UsernameField(label='Username', widget=forms.TextInput(attrs=
    {'class':'form-control'}))

    password = forms.CharField(label=_('Password'),strip=False, widget=forms.PasswordInput(attrs=
    {'autocomplete':'current-password',
    'class':'form-control'}))
