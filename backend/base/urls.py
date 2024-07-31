
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.allProducts, name='products'),
    path('profile/', views.getUserProfile, name='allUsersProfile'),
    path('profile-all/', views.getAllUserProfile, name='allUsersProfile'),
    path('products/<str:pk>', views.singleProducts, name='singleproducts'),
    path('sproducts/<str:pk>', views.singleproduct.as_view(), name='singleproducts'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.CreateUserView.as_view(), name='register'),

]