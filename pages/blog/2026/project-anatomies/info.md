> IMAGE Town 2 (Faget)
> Locuitori - 33K in total

- Faget 6.5K
- Bichigi 0.6K
- Begheiu Mic 0.2K
- Colonia Mica 0.5K
- Batesti 0.5K

> IMAGE Town
> Locuitori - 33K in total

- Lipova 10K people
- Zabrani 3.6K
- Neudorf 0.8K
- Chesint 1K
- Alios 0.9K
- Alunis 0.9K
- Frumuseni 2.6K
- Mandruloc 1.3K
- Sambateni 2.0K
- Ghioroc 3.8K
- Cuvin 1.5K
- Minis 0.6K
- Cladova 0.2K
- Soimos 0.8K
- Odvos 0.4K
- Ususau 1.4K
- Conop 2.0K
- Belotint 0.3K

> IMAGE City
> Locuitori -> 313K in total (250K Timisoara)

- Timisoara 250K
- Dumbravita 20K
- Sacalaz 9K
- Utvin 3.3K
- Ghiroda 8.8K
- Mosnita Noua 16K
- Mosnita Veche 6K

> IMAGE Country
> Locuitori 4M aprox

Analogie spitale / fisiere:

- la village, nu exista spital, nu exista fisier separat pentru services, ci e doar o parte din fisier
- la town, spitalul este un fisier separat, `services.ts`
- la city, `services` este un folder, cu mai multe spitale/fisiere
- la country, services este distribuit in mai multe multe foldere, ca si spitalele in orase

Analogii generale:

- spital = fisiere
- numar locuitori = LoC
- localitate/oras = domain (la large scale)

De ce un proiect nu evolueaza natural spre group by domain, si tarile da?

- Pentru ca tarile nu pornesc de la un sat > oras > tara, ci pleaca de la mai multe sate in paralel, dintre care unele evolueaza spre orase
- Proiectele software cresc de la mic la mare, si devin un oras mare cat o tara, cu anatomia similara ideii panourilor din Sahara
- Daca un proiect ar incepe cu diferite echipe care sa se ocupe de cate un domeniu, atunci ar evolua natural spre un group by domain
