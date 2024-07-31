from rest_framework import serializers
from .models import Product, Order, OrderItem, ShippingAddress
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken



class UserSerializer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    is_admin=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'name','email', 'is_admin', '_id']
    
    def get_name(self, obj):
        name = obj.first_name+' '+obj.last_name
        if name == ' ':
            name = obj.username
        return name
        
    def get__id(self, obj):
        return obj.id
    
    def get_is_admin(self, obj):
        return obj.is_staff

        
        
class myUserSerializerWithToken(UserSerializer):
    token=serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'name','email', 'is_admin', '_id','token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'