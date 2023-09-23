from django.db import models


class GoldLoanCompany(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    interest_rate = models.CharField(max_length=100)
    loan_amount = models.CharField(max_length=100)
    loan_tenure = models.CharField(max_length=100)
    gold_security = models.TextField()
    processing_fee = models.CharField(max_length=200, null=True)
    loan_disbursal_time = models.CharField(max_length=100, null=True)
    age_requirement = models.CharField(max_length=100, null=True)
    accepted_items = models.TextField(null=True)
    documentation_charges = models.CharField(max_length=100, null=True)
    custody = models.TextField(null=True)
    rate_per_gram = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.name
