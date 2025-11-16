# AI Forretningsanalyse Værktøj

Dette er en frontend-applikation, der giver personaliserede AI-anbefalinger til virksomheder baseret på deres hjemmeside-URL. Den bruger Google Gemini API til at generere forslag på flere sprog.

## Funktioner

-   **AI-drevet analyse:** Indtast en virksomheds URL for at modtage tre niveauer af forbedringsforslag.
-   **Flersproget support:** Brugergrænsefladen og AI-resultaterne kan vises på dansk, engelsk, fransk, tysk, italiensk, russisk og ukrainsk.
-   **Moderne Frontend:** Bygget med React, TypeScript og Vite for en hurtig og moderne udviklingsoplevelse.

---

## Lokal Udvikling (Opsætning)

Følg disse trin for at køre projektet på din egen computer (f.eks. i WSL2/Ubuntu).

### Forudsætninger

-   [Node.js](https://nodejs.org/) (version 18 eller nyere anbefales). Dette inkluderer `npm`.

### 1. Opret en `.env`-fil

Du skal bruge en Google Gemini API-nøgle.

1.  I roden af dit projekt, opret en ny fil og navngiv den `.env`.
2.  Tilføj din API-nøgle til filen på denne måde:

    ```
    VITE_API_KEY=DIN_API_NØGLE_HER
    ```
    *(**Vigtigt:** Navnet **skal** starte med `VITE_` for at Vite kan læse den.)*

### 2. Installer afhængigheder

Åbn din terminal i projektmappen og kør:

```bash
npm install
```
Dette vil downloade alle de nødvendige pakker (React, Vite, osv.), som er defineret i `package.json`.

### 3. Start udviklingsserveren

Når installationen er færdig, kan du starte den lokale server:

```bash
npm run dev
```

Din terminal vil nu vise en lokal adresse (typisk `http://localhost:5173`). Åbn denne i din browser for at se applikationen. Serveren vil automatisk genindlæse siden, når du laver ændringer i koden.
