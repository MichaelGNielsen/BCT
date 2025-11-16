# AI Forretningsanalyse Værktøj

Dette er en frontend-applikation, der giver personaliserede AI-anbefalinger til virksomheder baseret på deres hjemmeside-URL. Den bruger Google Gemini API til at generere forslag på flere sprog.

## Funktioner

-   **AI-drevet analyse:** Indtast en virksomheds URL for at modtage tre niveauer af forbedringsforslag.
-   **Flersproget support:** Brugergrænsefladen og AI-resultaterne kan vises på dansk, engelsk, fransk, tysk, italiensk, russisk og ukrainsk.
-   **Dynamisk brugerflade:** Bygget med React og TypeScript for en moderne og responsiv oplevelse.
-   **Visuelt tiltalende design:** Inkluderer subtile baggrundsanimationer og et rent layout.

## Sådan virker det

Applikationen tager en URL som input og sender en anmodning til Google Gemini API. Prompten instruerer modellen i at fungere som en AI-forretningskonsulent og generere tre forslag (et kort, et mellemlangt og et detaljeret) på det valgte sprog. Resultaterne vises derefter i et brugervenligt format.
