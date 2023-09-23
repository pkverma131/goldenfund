from django.contrib import admin
from django.urls import path, include  # Import the 'include' function

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),  # Include the URLs from the 'companies' app
]
