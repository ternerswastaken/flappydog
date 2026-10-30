# Flappy Dog

A tiny browser game about a dog with big flying ambitions. No dependencies or build step.

## Play locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open the server in a browser. Press Space, Arrow Up, click, or tap the playfield to flap. Clear hedges to score, and press P to pause. Personal bests are saved in browser local storage. Sound is optional.

All artwork is drawn locally on a canvas; no external assets or services are required.

The page and playfield follow your device's light or dark appearance until you choose a mode with the Dark mode button. That choice is saved in your browser and shared across tabs.

To prepare the static publishing files, run `node build.mjs`. The output is written to `dist/`.
