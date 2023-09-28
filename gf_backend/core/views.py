from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import GoldLoanCompany
from .serializers import GoldLoanCompanySerializer

class GoldLoanCompanyList(generics.ListAPIView):
    queryset = GoldLoanCompany.objects.all()
    serializer_class = GoldLoanCompanySerializer
    permission_classes = [AllowAny] 

class GoldLoanCompanyDetail(generics.RetrieveAPIView):
    queryset = GoldLoanCompany.objects.all()
    serializer_class = GoldLoanCompanySerializer
    permission_classes = [AllowAny] 
