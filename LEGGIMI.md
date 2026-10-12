# Scheda Pesistica — versione sito

Questa cartella è il sito completo: basta pubblicarla così com'è.
Non serve un server: niente database, niente account, niente costi.

## Dove stanno i dati

Tutto resta **nel browser del telefono** di chi usa l'app: schede importate, pesi, note, date.
Niente viene inviato a server, nemmeno a te. Il sito non usa cookie e non carica nulla da
altri siti (librerie e font sono in questa cartella).

Ognuno è responsabile dei propri dati, quindi nell'app c'è **Scarica backup** in fondo alla
schermata iniziale: un file `.json` da tenere su File/iCloud, da usare con **Ripristina backup**
se si cambia telefono o si cancellano i dati di Safari.

## Pubblicare su GitHub Pages (gratis)

1. Crea un account su <https://github.com> (se non ce l'hai).
2. In alto a destra: **+** → **New repository**. Nome, per esempio `scheda`. Scegli **Public**
   (le pagine gratuite di GitHub richiedono un repository pubblico: si vede il codice dell'app,
   non i dati di nessuno). Crea.
3. Nella pagina del repository: **uploading an existing file** (o **Add file → Upload files**).
   Trascina **il contenuto** di questa cartella (index.html, sw.js, manifest.webmanifest e le
   cartelle fonts, icons, vendor), non la cartella stessa. Poi **Commit changes**.
   - Il file `.nojekyll` è nascosto: se il tuo computer non lo mostra non è un problema.
4. **Settings → Pages**. In *Build and deployment*: Source **Deploy from a branch**,
   Branch **main**, cartella **/ (root)**, **Save**.
5. Dopo un paio di minuti la stessa pagina mostra l'indirizzo, del tipo
   `https://tuonome.github.io/scheda/`.

## Sul telefono

Apri l'indirizzo in **Safari** → **Condividi** → **Aggiungi alla schermata Home**.
Così si apre a tutto schermo con la sua icona, funziona anche senza rete e Safari tiene i dati
più al sicuro rispetto a un sito visitato ogni tanto.

Le schede importate dentro Claude **non** passano da sole al sito: nell'app su Claude tocca
**Scarica backup**, poi nel sito **Ripristina backup**.

## Aggiornare il sito

Carica i nuovi file sopra i vecchi (stessa procedura del punto 3). Chi ha l'app aperta vede la
nuova versione alla prossima apertura con rete; i dati salvati non vengono toccati.

## Alternative a GitHub Pages

Netlify Drop (<https://app.netlify.com/drop>) o Cloudflare Pages: trascini la cartella e ti
danno un indirizzo. Funziona allo stesso modo.
