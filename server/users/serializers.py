from dataclasses import field
from pyexpat import model
from statistics import mode
from django.contrib.auth.models import User
from rest_framework import serializers
from team.api.serializers import TeamSerializer
from syncup_board.serializers import SyncupBoardSerializer
class UserListSerializer(serializers.ModelSerializer):
    '''
        Serializer class for listing users

        References:
        ___________
        https://www.django-rest-framework.org/api-guide/relations/

    '''

    roles = serializers.StringRelatedField()
    teams = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model=User
        fields=['id','date_joined','username','email','groups','roles','teams','first_name','last_name','is_staff','is_active','last_login']

class UserPartialUpdateSerializer(serializers.ModelSerializer):
    '''
        Serializer class for Partial Update users
    '''
    class Meta:
        model=User
        fields=['id','username','first_name','last_name','is_staff']

# class GroupSerializer(serializers.HyperlinkedModelSerializer):
    
#     class Meta:
#         model= Group
#         fields=['url','name']

class LoggedUserSerializer(serializers.ModelSerializer):
    '''
        Serializer class for User who is logged in
    '''
    teams = TeamSerializer(many=True,read_only=False)
    roles = serializers.SlugRelatedField(read_only=True, slug_field='role')
    class Meta:
        model = User
        fields = ['id','date_joined','username','email','groups','roles','teams','first_name','last_name','is_staff','is_active','last_login','teams']