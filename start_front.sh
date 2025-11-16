#!/bin/bash

# Funktion til at tjekke, om en kommando eksisterer
command_exists() {
  command -v "$1" >/dev/null 2>&1
}

# Tjek for Node.js og npm
if ! command_exists node || ! command_exists npm; then
  echo "Fejl: Node.js og/eller npm er ikke installeret."
  echo "Disse er påkrævet for at køre projektet."
  echo ""
  echo "For at installere på Ubuntu/WSL, kør venligst:"
  echo "sudo apt-get update && sudo apt-get install -y nodejs npm"
  echo ""
  echo "Scriptet afsluttes."
  exit 1
fi

echo "Node.js og npm fundet."

# Tjek om node_modules mappen eksisterer. Hvis ikke, kør npm install.
if [ ! -d "node_modules" ]; then
  echo "'node_modules' mappen blev ikke fundet. Kører 'npm install'..."
  npm install
  if [ $? -ne 0 ]; then
    echo "Fejl under 'npm install'. Tjek venligst for fejl ovenfor."
    exit 1
  fi
  echo "Afhængigheder er installeret."
else
  echo "Afhængigheder er allerede installeret. Springer 'npm install' over."
fi


# Start Vite udviklingsserveren
echo "Starter Vite udviklingsserveren..."
echo "Tryk på CTRL+C for at stoppe serveren."
npm run dev