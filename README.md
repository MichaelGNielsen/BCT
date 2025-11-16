# AI Forretningsanalyse Værktøj

Dette er en frontend-applikation, der giver personaliserede AI-anbefalinger til virksomheder baseret på deres hjemmeside-URL. Den bruger Google Gemini API til at generere forslag.

## Sådan køres projektet

Dette projekt er designet til at blive kørt i et miljø, der kan servere statiske filer og injicere miljøvariabler i JavaScript-koden.

### Forudsætninger

- Et miljø, der kan køre shell-scripts (som Linux, macOS eller WSL på Windows).
- En måde at levere `API_KEY` miljøvariablen til applikationen under kørsel. Applikationskoden forventer, at `process.env.API_KEY` er tilgængelig.
- Python 3 (for den medfølgende simple webserver).

### Opsætning og Start

1.  **Indstil API-nøgle:**
    Før du starter serveren, skal du gøre din Google Gemini API-nøgle tilgængelig som en miljøvariabel ved navn `API_KEY`.

    For at det medfølgende `start_front.sh`-script kan fungere med API-nøglen, ville du typisk have brug for en mere avanceret server eller et build-trin. En simpel Python-server kan ikke injicere denne miljøvariabel i client-side-koden.

    Men hvis du kører dette i et miljø, der håndterer dette (som AI Studio), vil nøglen blive injiceret automatisk.

2.  **Start Udviklingsserveren:**
    Det inkluderede `start_front.sh`-script starter en grundlæggende webserver ved hjælp af Python.

    *   Gør først scriptet eksekverbart:
        ```bash
        chmod +x start_front.sh
        ```

    *   Kør derefter scriptet:
        ```bash
        ./start_front.sh
        ```

3.  **Åbn Applikationen:**
    Når serveren kører, skal du åbne din webbrowser og navigere til:
    [http://localhost:8000](http://localhost:8000)

## Projektstruktur

- `index.html`: Det primære HTML-indgangspunkt.
- `index.tsx`: Roden af React-applikationen.
- `App.tsx`: Hovedapplikationskomponenten, der styrer state.
- `components/`: Indeholder alle de genanvendelige React-komponenter.
- `services/`: Huser logikken for kommunikation med Gemini API'en.
- `lib/`: Indeholder hjælpefiler, såsom oversættelser.
- `types.ts`: Definerer delte TypeScript-typer.
- `start_front.sh`: Et script til at køre en simpel lokal udviklingsserver.
