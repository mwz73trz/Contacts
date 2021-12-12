from django.urls import path, include
from .views import ContactViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('wines', ContactViewSet, basename='contact')
urlpatterns = router.urls