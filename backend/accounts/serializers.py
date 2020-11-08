from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

#This is how you manage custom authentication system (AbstractBaseUser, PermissionsMixin, BaseUserManager)
User = get_user_model()
#Serializer is the system that change data format to suitable one to each device(database, web, ios, android)
class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')
