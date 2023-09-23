from rest_framework import generics
from .models import GoldLoanCompany
from .serializers import GoldLoanCompanySerializer

class GoldLoanCompanyList(generics.ListAPIView):
    queryset = GoldLoanCompany.objects.all()
    serializer_class = GoldLoanCompanySerializer

class GoldLoanCompanyDetail(generics.RetrieveAPIView):
    queryset = GoldLoanCompany.objects.all()
    serializer_class = GoldLoanCompanySerializer
