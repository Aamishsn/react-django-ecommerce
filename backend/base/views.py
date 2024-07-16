from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products
from rest_framework.views import APIView
# Create your views here.


def home (request):
    return JsonResponse({"message": "Hello, World!"})

@api_view(['GET'])
def allProducts (request):
    return Response (products)

@api_view(['GET'])
def singleProducts (request, pk):
    product=None
    for i in products:
            if i['_id']==pk:
                 return Response(i)
    return Response(product)  

class singleproduct(APIView) :
     def get(self,request,pk):
          product=None
          for i in products:
                if i['_id']==pk:
                    return Response(i)
          return Response('The requested product does not exist') 