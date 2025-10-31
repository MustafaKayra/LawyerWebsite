from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def workspaces(request):
    return render(request,"workspace.html")

def blogs(request):
    return render(request,"blogs.html")
