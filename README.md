# Gyakori kérdések REST API

## Leírás

- adatbázis: `sqlite`
- backend: `express` (NestJs)
- dokumentáció: `swagger` *is van*

## Beüzemelés
1. klónozd le a repót <br>

  ``` git clone https://github.com/MMGeri/NestJs.git ```
  
2. ha nem vagy a TypeORM branchen akkor menj át

  ``` git checkout TypeORM ```
  
3. instalálld a packageket 

  ``` npm install ``` 
  
4. futtasd az alkalmazást 

  ``` npm run start ```
  
  localhost:3000 -en elérhetőek lesznek majd az endpointok
  
## Dokumentáció, megoldások

- Adatbázis az `sqlite`-ot használtam, először TypeORM nélkül de aztán át brancheltem és ez lett a final version, a másik elérhető a master branchen megtekíntésre.
- Sqlite adatbázis elérhető a root mappában `database.sqlite` néven, minden táblára megvan a kapcsolat és a cascade, az ID-k re auto increment van beállítva.
- TypeORM: minden táblának (kivéve QuestionCategory)-nak létrehoztam egy külön entitást, a **DTO**-kat és a **Controller**-eket külön mappába helyeztem el, beállítottam az entitás propertyknek a kapcsolatokat (One-to-many, many-to-many, etc...). Minden DTO-ban be vannak állítva a validációs dekorátorok amit a `main.ts` -ben globális `ValidationPipe` (class-validator) használ

  (src/entities, src/dtos, src/controllers)
- Authentikációhoz létrehoztam egy `AuthModule`-t és `AuthService`-t és két stratégiát:
  - Local: a bejelentkeztetéshez email és jelszóval
  - Jwt: tokennel való authentikáció amit a bejelentkezés után kapunk meg.
  - A JWT secret key-t a [.env](https://github.com/MMGeri/NestJs/blob/TypeORM/.env) fileban lehet átállítani
- Swagger dokumentáció elérhető: [Swagger](https://github.com/MMGeri/NestJs/tree/TypeORM/swagger)

---

__Endpointok__
- `GET '/question'` -visszatér az összes kérdéssel, lehet queryt írni kategóriákra pl: `?categories[0][id]=1&categories[0][name]=Technical`
- `GET '/getCategories'` -visszatér az összes kategóriával amik közül választhatunk
- `GET '/question/{id}'` -lekérünk egy kérdést és a hozzá tartozó válaszokat
- `GET '/profile'` -ha rendelkezünk JWT tokennel akkor megnézhetjük a profilunkat
<br>

- `POST '/createQuestion'` - létrehozunk egy kérdést, JWT bearer token kell hozzá
- `POST '/question/createAnswer` - létrehozunk egy választ egy kérdésre, JWT bearer token kell hozzá
- `POST '/question/like'` - növeljük egy kérdés like számát, JWT bearer token kell hozzá
- `POST '/question/dislike'` - a dislike számot növeljük, JWT bearer token kell hozzá
- `POST '/login'` -elküldjük a bejelentkezési adatainkat, visszakapjuk a JWT tokent
- `POST '/register'` -elküldjük a regisztrációs adatokat, létrehoz egy felhasználót, a jelszó hash-elve lesz

A request body és response pédlák a [Swagger](https://github.com/MMGeri/NestJs/tree/TypeORM/swagger) dokumentációban megtalálhatóak
