from django.shortcuts import render
from django.http import HttpResponse
from users.decorators import super_user_permission, permission_required


@super_user_permission()
def index(request):   
    return render(request, 'dashboard/index.html')


@permission_required("district", 'Health')    
def health_main(request):   
    return render(request, 'dashboard/health_main.html')


@permission_required("district", "Mining")	
def mining_main(request):   
    return render(request, 'dashboard/mining_main.html')


@permission_required("district", "Other Government Services")	
def othergov_main(request):   
    return render(request, 'dashboard/othergov_main.html')


@permission_required("district", "Education")	
def education_main(request):   
    return render(request, 'dashboard/education_main.html')