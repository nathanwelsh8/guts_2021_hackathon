from api.models import CharityAccount, User
from django.utils import timezone
from django.views import View
from django.core.serializers import serialize
from django.contrib.auth import authenticate, login, logout
from rest_framework import generics, response
from rest_framework.permissions import IsAuthenticated
from django.http import JsonResponse, HttpResponse

from . import serializers

class Profile(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = serializers.User

    def get_object(self):
        return self.request.user

class EditCharityAccountView(View):
    'handle charity edit views'

    def post(self,request):
        response = HttpResponse(content_type="application/json")
        
        # check edit_charity in post request
        charity_account = None
        try:
            charity_account = CharityAccount.objects.get(email = request.POST.get("email"))
        except Exception as e:
            print(e)
            response.status_code = 404
            response.content = serialize('json', {"Error":"User not found"})
        finally:
            if charity_account:
                user = authenticate(username=charity_account.user.username, password= request.POST.get("password"))
                if user is not None:
                    charity_account.charityname = request.POST.get("charityname")
                    charity_account.phone = request.post.get("phone")

                    # update location info
                    charity_account.address.postcode = request.POST.get("postcode")
                    geolocation = request.POST.get("geolocation")
                    charity_account.address.longitude = geolocation[0]
                    charity_account.address.latitude = geolocation[1]

                    charity_account.save()
                    response.status_code = 200
                    response.content = serialize('json', {"Success":"User details updated"})
                else:
                    response.status_code = 401
                    response.content = serialize('json', {"Error":"Invalid Credentials"})

        return response

    def get(self, request):
        # return charity data

        response = HttpResponse(content_type="application/json")
        response['message'] = ""
        response.content = {}

        #check email present
        if not request.GET.get("email"):
            response.status_code = 400
            response['message'] = "'email' missing from request"
        else:
            email = request.GET.get("email")
            try: # check email exists
                response.content = serialize('json', CharityAccount.objects.filter(email=email))
                response.status_code = 200
                response['message'] = "Ok"
            except Exception as e:
                print(e)
                response.status_code = 404
                response['message'] = "Account does not exist"
        return response

class CreateCharityAccountView(View):

    def get(self,request):
        response = HttpResponse(content_type="application/json")
        response.status_code = 400
        response.content = serialize('json', {"Error":"Invalid Request"})
        return 
    
    def post(self, request):
        response = HttpResponse(content_type="application/json")
        email = request.POST.get("email","")
        username = email[:email.find("@")]
        password = request.POST.get("password")
        charityname = request.POST.get("name","")
        phone = request.POST.get("phone","")
        


class Ping(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, *args, **kwargs):
        return response.Response({'now': timezone.now().isoformat()})
