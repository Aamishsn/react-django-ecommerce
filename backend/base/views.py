from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products
from .models import Product
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .serializers import ProductSerializer, UserSerializer, myUserSerializerWithToken
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework import generics
# Create your views here.


def home (request):
    return JsonResponse({"message": "Hello, World!"})

@api_view(['GET'])
def allProducts (request):
    allProducts=Product.objects.all()
    serializer=ProductSerializer(allProducts, many=True)
    return Response ( serializer.data)

@api_view(['GET'])
def singleProducts (request, pk):
    sProducts=Product.objects.get(_id=pk)
    serializer=ProductSerializer(sProducts, many=False)
    return Response ( serializer.data)

class singleproduct(APIView) :
     def get(self,request,pk):
        sProducts=Product.objects.all(_id=pk)
        serializer=ProductSerializer(sProducts, many=False)
        return Response ( serializer.data)
     


@api_view(['GET'])
def getUserProfile(request):
    permissionClasses=[IsAuthenticated]
    user=request.user
    serializer=UserSerializer(user, many=False)
    return Response ( serializer.data)



@api_view(['GET'])
def getAllUserProfile(request):
    permissionClasses=[IsAdminUser]
    user=User.objects.all()
    serializer=UserSerializer(user, many=True)
    return Response ( serializer.data)


@api_view(['POST'])
def registerUser(request):
    permissionClasses=[AllowAny]
    data=request.data    
    # try:
    user = User.objects.create(
                username = data['username'],
                password = make_password(data['password'])
            )
        # serializer = UserSerializer(user, many=False)
    return Response('user created')   
    # except:
    #     message = {'detail': 'User with this email already exists'}
    #     return Response(message, status = status.HTTP_400_BAD_REQUEST)


class myTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = myUserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data
    

class MyTokenObtainPairView(TokenObtainPairView):
    permissionClasses=[AllowAny]
    serializer_class = myTokenObtainPairSerializer



class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = myUserSerializerWithToken
    permission_classes = [AllowAny]