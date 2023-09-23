from django.contrib import admin
from .models import GoldLoanCompany

class GoldLoanCompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'interest_rate', 'loan_amount', 'loan_tenure')
    list_filter = ('interest_rate', 'loan_amount', 'loan_tenure')
    search_fields = ('name', 'description')

# Register the model and admin class
admin.site.register(GoldLoanCompany, GoldLoanCompanyAdmin)
