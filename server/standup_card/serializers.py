
from rest_framework import serializers

from dataclasses import field
from .models import StandupCard,Update
from django.contrib.auth.models import User

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
        return str(f'{value.username}')

class UserRoleRelatedField(serializers.RelatedField):
     def to_representation(self, value):
        return str(f'{value.roles}')

class UpdateSerializer(serializers.ModelSerializer):
    user = UserRelatedField(many=False,queryset=User.objects.all(),read_only=False,source='user_id')
    user_id = serializers.PrimaryKeyRelatedField(many=False,read_only=True)
    role = UserRoleRelatedField(many=False,queryset=User.objects.all(),read_only=False,source='user_id')
    class Meta:
        model= Update
        fields = ['id','comment','created_at','updated_at','is_active','updated_at','user_id','user','role']


class StandupCardSerializer(serializers.ModelSerializer):
    ''' 
        Serializer for StandupCard model.
    '''
    # syncup_board = SyncupBoardSerializer(many=False,read_only=True,source='syncup_board_id')
    updates = UpdateSerializer(many=True, read_only = False)
    class Meta:
        model = StandupCard
        fields = ['id','sprint_id','release_cycle','created_at','updated_at','syncup_board_id','extraNote','is_active','updates']
