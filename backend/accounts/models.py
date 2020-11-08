from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    #This is the method that saves a new user when it is created.
    def create_user(self, email, name, password=None):

        if not email:
            raise ValueError('User must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user

# PermissionsMixin enable other your app to connect with this authentication
class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager() # I don't think you need this line

    #USERNAME_FIELD is what you use to login. I know. the name is suck. It should be LOGIN_FIELD
    # In default, USERNAME_FIELD is name, but you don'T want to login using name. do you?
    USERNAME_FIELD = 'email'
    #REQUIRED_FIELDS is essntial text besides USENAME_FIELD and password
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email