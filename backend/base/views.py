from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products
from .models import Product
from rest_framework.views import APIView
from .serializers import ProductSerializer
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
        serializer=ProductSerializer(sProducts, many=True)
        return Response ( serializer.data)