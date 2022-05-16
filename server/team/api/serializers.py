from rest_framework import serializers
from django.core import serializers as dj_serializer
from team.models import Team
from django.contrib.auth.models import User

from syncup_board.serializers import SyncupBoardSerializer
# from users.serializers import UserListSerializer


class UserRelatedField(serializers.RelatedField):

    '''
        Custom realtional field:
        Describes exactly how the output representation should be generated from the model instance.

        See also:
        _________
        https://www.django-rest-framework.org/api-guide/relations/#custom-relational-fields
    '''
    def display_value(self, instance):
        return instance

    def to_representation(self, value):
        return str(f'{value.username} ({value.roles})')
       

    def to_internal_value(self, data):
        return User.objects.get(username=data)


class TeamSerializer(serializers.ModelSerializer):

    '''
        Serializer class for listing and editing team/s
    '''

    ''' If you want to display user id of particular team'''
    # users = serializers.PrimaryKeyRelatedField(many=True,queryset=User.objects.all())

    ''' If you want user name of particular team. Easier to read from swagger'''    
    users = UserRelatedField(many=True,queryset=User.objects.all(),read_only=False)

    ''' All field of users are returned. Use this when developing frontend '''
    # users = UserListSerializer(many=True)
    print(dir(users))
    syncup_board = SyncupBoardSerializer(many=False,read_only=False)

    class Meta:
        model=Team
        fields=['id','created_at','updated_at','teamName','users','is_active','syncup_board']   
        'or use fields="__all__"'

    




