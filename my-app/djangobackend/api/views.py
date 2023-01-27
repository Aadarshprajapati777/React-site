from django.shortcuts import render
from .serializers import UserSerializer
from .models import User
# Create your views here.
from rest_framework.generics import ListAPIView
class UserListView(ListAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerializer 