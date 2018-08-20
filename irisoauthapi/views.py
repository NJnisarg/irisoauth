import requests
import json
from rest_framework import views
from django.shortcuts import render, HttpResponse, redirect


class OauthApiCallback(views.APIView):

    """
    Handles the Oauth Iris API Callback
    Handles a GET Request with the authorization_code as a query_param
    """
    def get(self, request):
        auth_code = self.request.query_params.get('code', None)
        if auth_code is not None:
            response_obj = \
                requests.post('https://iris.nitk.ac.in/oauth/token',
                              data={'client_id': 'f9077784ad8a2231eb262f8aa2a8efc46b7aac67e22bda7146140c4fd1b665eb',
                                    'client_secret': 'b759e455fa9984fd588c5bce92de106ab87baa8a5b3d7684e4108964c458c7ee',
                                    'code': auth_code,
                                    'grant_type': 'authorization_code',
                                    'redirect_uri': 'https://localhost:8000/callback'
                                    }
                              )
            response_obj = json.loads(response_obj.text)
            if response_obj is not None:
                try:
                    profile_response = requests.get('https://iris.nitk.ac.in/api/v1/users/me.json?',
                                                    params={'access_token': response_obj['access_token']})
                    profile_response = json.loads(profile_response.text)
                    return HttpResponse('<body><script type="text/javascript">localStorage.setItem("data",'
                                        '" ' + str(profile_response) + ' "); '
                                        'window.location.replace("https://localhost:8000/profile")</script></body>')
                except:
                    return render(request, 'error.html')
            else:
                return render(request, 'error.html')

        if auth_code is None:
            return redirect('/')


class OauthApiIndex(views.APIView):

    """
    Returns the index.html View on hitting this API
    """
    def get(self, request):
        return render(request, 'index.html')


class OauthApiProfile(views.APIView):
    """
    Returns the profile.html View on hitting this API
    """
    def get(self, request):
        return render(request, 'profile.html')
