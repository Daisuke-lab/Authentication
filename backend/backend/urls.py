
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
]
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

# += is equal to append
# "^" is 直後の文字が行の 先頭 にある場合にマッチします。.で始まる
# "*" is 	直前の文字が ０回以上 繰り返す場合にマッチします。 .が何個あってもいい