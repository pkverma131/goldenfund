# companies/serializers.py

from rest_framework import serializers
from .models import GoldLoanCompany

class GoldLoanCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = GoldLoanCompany
        fields = '__all__'
