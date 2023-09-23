import json
from django.core.management.base import BaseCommand
from core.models import GoldLoanCompany  # Replace 'your_app' with your app's name

class Command(BaseCommand):
    help = 'Insert gold loan companies from JSON fixture data'

    def handle(self, *args, **kwargs):
        # Load data from fixtures.json
        with open('/home/devwork/goldenfund/gf_backend/media/fixtures.json', 'r') as file:
            data = json.load(file)

        # Insert data into the GoldLoanCompany model
        for item in data:
            GoldLoanCompany.objects.create(
                name=item['name'],
                description=item['description'],
                interest_rate=item['interest_rate'],
                loan_amount=item['loan_amount'],
                loan_tenure=item['loan_tenure'],
                gold_security=item.get('gold_security', ''),
                loan_disbursal_time=item.get('loan_disbursal_time', ''),
                processing_fee=item.get('processing_fee', ''),
                age_requirement=item.get('age_requirement', ''),
                accepted_items=item.get('accepted_items', ''),
                documentation_charges=item.get('documentation_charges', ''),
                custody=item.get('custody', '')
            )

        self.stdout.write(self.style.SUCCESS('Gold loan companies inserted successfully.'))
