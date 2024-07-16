
from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.allProducts, name='products'),
    path('products/<str:pk>', views.singleProducts, name='singleproducts'),
    path('sproducts/<str:pk>', views.singleproduct.as_view(), name='singleproducts'),
]