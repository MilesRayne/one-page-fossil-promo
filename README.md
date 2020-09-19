# one-page-fossil-promo
>Dokumentacija sajta za potrebe kursa za saradnike.

##Opis ideje

Sajt je napravljen sa idejom da promoviše novi proizvod - sat kompanije Fossil, koji ona uskoro izbacuje na tržište.
Ova ideja je odabrana jer se potrebe takvog sajta vecinski poklapaju sa zahtevima zadatka koji je dat:
- Nije potrebno mnogo sekcija
- Nisu potrebne dodatne stranice
- Nisu potrebni framework-ovi ili bilo kakvi dodaci

Sajt je namenjen da ukratko opiše proizvod i omogući potencijalnom kupcu da ga poruči.


##Struktura sajta

Sajt se sastoji od: 
Jedne .html stranice.
Nekoliko .css fajlova uz pomoć kojih je namešten dizajn stranice, kao i responzivnost tog dizajna.
Jednim .js fajlom koji sadrži nekoliko funkcija koje upravljaju sadržajem određenih sekcija kao i slanjem podataka iz forme u LocalStorage pretraživača.

Stranica sajta podeljena je na 3 sekcije:
1. Početna, "Riley" sekcija, tako nazvana po proizvodu koji reklamira, služi da prikaže proizvod i ukratko ga opiše, tj. privuče pažnju kupca.
2. Sekcija detalja o proizvodu, koja prikazuje specifikacije sata i daje detaljne informacije sada zainteresovanim klijentima.
3. Sekcija poručivanja proizvoda, tj. sekcija koja sadrži formu koja treba da omogući klijentu da poruči proizvod.

##JavaScript funkcije

Postoje dve kljucne funkcionalnosti koje su omogucene radom funkcija unutar .js fajla:
- Specifikacije se ne nalaze upisane u sam .html fajl, vec se po ucitavanju stranice preko funkcije fillDetails()
podaci iz objekta details upisuju u innerHTML div-a zaduzenog za drzanje specifikacija proizvoda. To omogucava da se vrlo jednostavno i brzo
menjaju, brisu i dodaju specifikacije proizvoda ukoliko je to potrebno, dodavanjem vrednosti u niz osobina objekta details, umesto menjanjem same .html stranice.

- Pritiskom na confirm (submit) dugme forme na kraju sajta, pokrece se JavaScript funkcija koja skenira formu, skuplja njene elemente i ukoliko su ti elementi input,
uzima naziv tog inputa i njihove vrednosti i upisuje te vrednosti u objekat data, po kljucu [naziv tog inputa]. 
Nakon sto zavrsi sa tim, i time kreira objekat "data" sa svim potrebnim podacima, vrsi JSON.stringify tog objekta i upisuje u localStorage pretrazivaca.
