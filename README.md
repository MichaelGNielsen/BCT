# AI Forretningsanalyse Værktøj

Dette er en frontend-applikation, der giver personaliserede AI-anbefalinger til virksomheder baseret på deres hjemmeside-URL. Den bruger Google Gemini API til at generere forslag.

## Sådan køres projektet lokalt

Denne applikation er bygget med React og TypeScript og kræver et udviklingsmiljø med Node.js for at køre korrekt lokalt.

### Forudsætninger

-   **Node.js og npm:** Du skal have Node.js (version 18 eller nyere) og npm installeret. Du kan downloade dem fra [nodejs.org](https://nodejs.org/). For WSL/Ubuntu kan du installere dem med:
    ```bash
    sudo apt-get update && sudo apt-get install -y nodejs npm
    ```
-   **API Nøgle:** Du skal have en Google Gemini API-nøgle.

### Opsætning og Start

#### Den Nemme Måde (Anbefalet)

1.  **Opret en `.env.local` fil:**
    I roden af dit projekt skal du oprette en fil ved navn `.env.local`. Tilføj følgende linje, og erstat `DIN_API_NØGLE_HER` med din faktiske nøgle:
    ```
    VITE_API_KEY=DIN_API_NØGLE_HER
    ```
    *Vigtigt: Vite kræver, at miljøvariabler, der skal eksponeres for client-side-koden, starter med `VITE_`.*

2.  **Kør start-scriptet:**
    Åbn din terminal i projektmappen, gør scriptet eksekverbart, og kør det:
    ```bash
    chmod +x start_front.sh
    ./start_front.sh
    ```
    Scriptet vil automatisk installere afhængigheder og starte udviklingsserveren for dig.

#### Den Manuelle Måde

1.  **Opret en `.env.local` fil** som beskrevet ovenfor.

2.  **Installer afhængigheder:**
    Åbn din terminal i projektmappen og kør:
    ```bash
    npm install
    ```

3.  **Start udviklingsserveren:**
    Når installationen er færdig, start serveren:
    ```bash
    npm run dev
    ```

4.  **Åbn Applikationen:**
    Uanset hvilken metode du bruger, vil serveren starte og vise en lokal URL i terminalen (typisk `http://localhost:5173`). Åbn denne URL i din webbrowser for at se og interagere med applikationen.

## Projektstruktur

-   `index.html`: Det primære HTML-indgangspunkt.
-   `index.tsx`: Roden af React-applikationen.
-   `App.tsx`: Hovedapplikationskomponenten, der styrer state.
-   `package.json`: Definerer projektets scripts og afhængigheder.
-   `vite.config.ts`: Konfigurationsfil for Vite-udviklingsserveren.
-   `components/`: Indeholder alle de genanvendelige React-komponenter.
-   `services/`: Huser logikken for kommunikation med Gemini API'en.
-   `lib/`: Indeholder hjælpefiler, såsom oversættelser.
-   `types.ts`: Definerer delte TypeScript-typer.