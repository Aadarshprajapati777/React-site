from django.urls import path
from api import views

urlpatterns = [
    path('user/', views.UserListView.as_view()),
]