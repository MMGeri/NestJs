# Swagger dokumentáció

__Problémák a dokumentációval:__ 
- az `Get('/')` elérési útvonalú kéréshez nem használható a példa, a querybe több categoryt is lehet írni, ilyen formában:

    például : /?categories[0][id]=1&categories[0][name]=Technical& ... stb.
