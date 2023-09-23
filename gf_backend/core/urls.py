from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.GoldLoanCompanyList.as_view(), name='company-list'),
    path('companies/<int:pk>/', views.GoldLoanCompanyDetail.as_view(), name='company-detail'),
]
