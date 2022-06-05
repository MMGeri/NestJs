# Gyakori kérdések REST API

## Leírás

- adatbázis: `sqlite`
- backend: `express`
- dokumentáció: `swagger`

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
- Swagger dokumentáció elérhető: [Swagger](https://github.com/MMGeri/NestJs/tree/TypeORM/swagger)

---

__Endpointok__
- `GET '/'` -visszatér az összes kérdéssel, lehet queryt írni kategóriákra pl: `?categories[0][id]=1&categories[0][name]=Technical`
- `GET '/getCategories'` -visszatér az összes kategóriával amik kötül választhatunk
- `GET '/question/{id}'` -lekérünk egy kérdést és az azokhoz tartozó válaszokat
- `GET '/profile'` -ha rendelkezünk JWT tokennel akkor megnézhetjük a profilunkat
<br>

- `POST '/createQuestion'` - létrehozunk egy kérdést
- `POST '/question/createAnswer` - létrehozunk egy választ egy kérdésre
- `POST '/question/like'` - növeljük egy kérdés like számát
- `POST '/question/dislike'` - a dislike számot növeljük
- `POST '/login'` -elküldjük a bejelentkezési adatainkat, visszakapjuk a JWT tokent
- `POST '/register'` -elküldjük a regisztrációs adatokat, létrehoz egy felhasználót, a jelszó hash-elve lesz
