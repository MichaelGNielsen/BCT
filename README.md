# AI Forretningsanalyse Værktøj

Dette er en frontend-applikation, der giver personaliserede AI-anbefalinger til virksomheder baseret på deres hjemmeside-URL. Den bruger Google Gemini API til at generere forslag på flere sprog.

## Funktioner

-   **AI-drevet analyse:** Indtast en virksomheds URL for at modtage tre niveauer af forbedringsforslag.
-   **Flersproget support:** Brugergrænsefladen og AI-resultaterne kan vises på dansk, engelsk, fransk, tysk, italiensk, russisk og ukrainsk.
-   **Dynamisk brugerflade:** Bygget med React og TypeScript for en moderne og responsiv oplevelse.
-   **Visuelt tiltalende design:** Inkluderer subtile baggrundsanimationer og et rent layout.

---

## Lokal Udvikling (WSL2/Ubuntu)

Følg disse trin for at køre projektet på din egen computer.

### Forudsætninger

-   [Node.js og npm](https://nodejs.org/en/download/package-manager) installeret.
-   En Google Gemini API-nøgle.

### 1. Klon projektet

Hvis du ikke allerede har gjort det, skal du have projektfilerne på din computer.

### 2. Opret en `.env`-fil

Dette er den vigtigste del for at få det til at virke lokalt. Din API-nøgle skal holdes hemmelig.

1.  I roden af dit projekt (i samme mappe som `package.json`), skal du oprette en ny fil med navnet `.env`.
2.  Åbn `.env`-filen og tilføj følgende linje, hvor du erstatter `DIN_API_NØGLE_HER` med din faktiske Gemini API-nøgle:

    ```
    VITE_API_KEY=DIN_API_NØGLE_HER
    ```

    **Vigtigt:** Navnet *skal* starte med `VITE_` for at Vite kan gøre det tilgængeligt i din applikation.

### 3. Start Udviklingsserveren

Den nemmeste måde at starte er ved at bruge det medfølgende script.

1.  **Gør scriptet eksekverbart:** Åbn din WSL2/Ubuntu-terminal i projektmappen og kør:
    ```bash
    chmod +x start_front.sh
    ```
2.  **Kør scriptet:**
    ```bash
    ./start_front.sh
    ```

Scriptet vil automatisk installere de nødvendige `node_modules` første gang og derefter starte din lokale udviklingsserver. Du vil se en URL (typisk `http://localhost:5173`), som du kan åbne i din browser.
