from django.urls import path
from .views import OauthApiCallback, OauthApiIndex, OauthApiProfile

urlpatterns = [
    path('', OauthApiIndex.as_view(), name='index_page'),
    path('profile/', OauthApiProfile.as_view(), name='profile_page'),
    path('callback/', OauthApiCallback.as_view(), name='callback_url'),

]
