# Studio Fryzur - strona salonu

Strona salonu fryzjerskiego Sylwii Durczok, ul. Podleśna 21, 44-282 Czernica. Jedna strona po polsku, czysty HTML/CSS/JS.

- Do opublikowania jest tylko folder `site/`.
- `.tooling/` służy wyłącznie do budowania strony.
- `.impeccable/` to notatki projektowe.

Tydzień salonu jest narysowany jako warkocz z dwóch pasm:
- granatowe pasmo to rano (7:00-15:00), fioletowe to po południu (12:00-20:00);
- w dniu, w którym pracuje dana zmiana, jej pasmo leży na wierzchu;
- niedzielę spina gumka.

Dzisiejszy dzień i to, czy salon jest teraz otwarty, liczą się na żywo według czasu polskiego.

## Podgląd i przebudowa

W terminalu, w folderze `.tooling`:

```
npm install
node build.mjs
node serve.mjs 4175
```

Potem otwórz http://localhost:4175/. Godziny, usługi i opinie są w `.tooling/build.mjs` (tablice `DAYS`, `SERVICES`, `GUESTBOOK`), wygląd w `.tooling/src/css/style.css`, a zachowanie strony w `site/js/main.js`.

## Do potwierdzenia z właścicielką przed publikacją

1. **Godziny.** Na stronie są godziny z Map Google (pn, śr, pt 12-20; wt, czw 7-15; sob 7-13). Czy są aktualne i jak wyglądają święta?
2. **Adres.** Ulica „Podleśna 21” pochodzi z rejestru firm (CEIDG), bo wizytówka Google podaje tylko „44-282 Czernica”. Pinezka na mapie stoi na Podleśnej.
3. **Usługi.** Na stronie są tylko usługi potwierdzone w opiniach: strzyżenie, dobór fryzury, modelowanie, porada i fryzury na ślub. Jeśli salon robi też farbowanie, trwałą, strzyżenie dzieci albo makijaż, można je dopisać. Cen celowo nie ma.
4. **Pani Dorota.** Czy może być wymieniona z imienia, tak jak w opiniach?
5. **Opinie.** Cytaty to publiczne opinie z Map Google, podpisane imieniem i inicjałem. Warto, żeby właścicielka o tym wiedziała.
6. **NIP w stopce.** Czy może być widoczny?
7. **Zdjęcia.** Jeśli właścicielka prześle zdjęcie salonu, zapisz je jako `.tooling/photos-src/salon.jpg` i uruchom `node build.mjs`. Pojawi się pod sekcją o fryzjerkach. Inne zdjęcia można dodać w tablicy `OWNER_PHOTOS` w `build.mjs`.
8. **Wizytówka Google jest niezgłoszona** („Zgłoś prawo do tej firmy”). Warto, żeby właścicielka ją przejęła i wpisała tam adres tej strony.

## Publikacja (Cloudflare Pages przez GitHub)

1. Utwórz na GitHubie puste repozytorium, np. `studio-fryzur`, i wypchnij do niego ten folder.
2. W Cloudflare wybierz Workers & Pages, potem Create, Pages i Connect to Git, a następnie to repozytorium.
3. Ustawienia:
   - Framework preset: None;
   - Build command: puste;
   - Build output directory: `site`.
4. Po podpięciu własnej domeny zmień w `build.mjs` adres obrazka `og:image` na pełny (`https://domena/img/og.jpg`) i dodaj `<link rel="canonical">`.

Gdy zmienią się godziny: popraw `DAYS` w `build.mjs` i uruchom `node build.mjs`. Obrazek `site/img/og.jpg` (podgląd przy udostępnianiu linku) też pokazuje godziny, więc trzeba go wtedy zrobić na nowo; poproś o to Claude'a.
