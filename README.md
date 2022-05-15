# Cloud Computing Project Application

Link prezentare: https://youtu.be/E1tz9X4pSy4

## 1. Introducere

Aplicatia prezinta un suport viitorilor studenti prin prezentarea unei liste de facultati. Motorul de
cautare accepta ca input o tara iar API-ul folosit returneaza lista cu toate universitatile din acea
tara. In ceea ce priveste functionalitatea de search au fost implementate validari, se returneaza
mesaje de eroare in cazul in care tara cautata nu a fost identificata. Mai departe, este implementat
o functionalitate de contact prin intermediul providerului nodemailer si ethereal email.

## 2. Descriere problema

In multe cazuri alegera facultatii potrivite este una dintre cele mai grele alegeri. Aplicatia doreste sa
raspunda acestei nevoi de informatii pe baza carora sa se poata lua o decizie mai buna.

## 3. Descriere API

Rezultatele sunt generate cu ajutorul api-ului de la https://hipolabs.com/.
API-ul folosit este apelat folosind un query param intitulat country in functie de care se vor returna
rezultatele.

## 4. Flux de date

In momentul apasari butonului de search se fac 2 requesturi, un POST in baza de date proprie mysql
hostata cu ajutorul Google Cloud si un POST pe ruta API-ului http://universities.hipolabs.com/.


## 5. Capturi de ecran

**Figure 4 - Search bar initial**
<img width="1076" alt="Screenshot 2022-05-15 at 22 05 37" src="https://user-images.githubusercontent.com/57771180/168491122-0672858a-5555-4d92-8ccd-8de4948d5467.png">
**Figure 5 - Lista returnata de API**
<img width="1382" alt="Screenshot 2022-05-15 at 22 05 53" src="https://user-images.githubusercontent.com/57771180/168491128-7116ac8a-5d6c-4cae-9db9-0d66ee082a94.png">
**Figure 6 - Formular de contact**
<img width="1371" alt="Screenshot 2022-05-15 at 22 06 03" src="https://user-images.githubusercontent.com/57771180/168491131-acf0a0e6-1a08-43c2-81c4-552127c5328d.png">
