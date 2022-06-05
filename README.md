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
  
## Dokumentáció, megoldások

- Adatbázis az `sqlite`-ot használtam, először TypeORM nélkül de aztán át brancheltem és ez lett a final version, a másik elérhető a master branchen megtekíntésre.
- Sqlite adatbázis elérhető a root mappában `database.sqlite` néven, minden táblára megvan a kapcsolat és a cascade, az ID-k re auto increment van beállítva.
- TypeORM: minden táblának (kivéve QuestionCategory)-nak létrehoztam egy külön entitást, a **DTO**-kat és a **Controller**-eket külön mappába helyeztem el, beállítottam az entitás propertyknek a kapcsolatokat (One-to-many, many-to-many, etc...). Minden DTO-ban be vannak állítva a validációs dekorátorok amit a `main.ts` -ben globális `ValidationPipe` (class-validator) használ

  (src/entities, src/dtos, src/controllers)
- Authentikációhoz létrehoztam egy `AuthModule`-t és `AuthService`-t és két stratégiát:
  - Local: a bejelentkeztetéshez email és jelszóval
  - Jwt: tokennel való authentikáció amit a bejelentkezés után kapunk meg.
