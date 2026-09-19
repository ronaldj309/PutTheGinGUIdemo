# PutTheGinGUIdemo

Working repo for dev on Windows and test on ubuntu (spc)

Standalone Vite + React + Tailwind page that shows hover text on the graphic
library desk. It is **not** wired to DocsGPT.

The layout matches the DocsGPT frontend Docker style: `node:22` image, Vite
dev server, source bind-mounted, `DOCKER=true` so file watching uses polling.
The app listens on port 5188 in the container and on the host, so the URL
Vite prints is the one to open.

## Run with Docker

From this folder:

```bash
docker compose up --build
```

Open http://localhost:5188

Stop with `Ctrl+C`, or `docker compose down`.

## What to try

1. Leave **Show hit areas** on until you see the six yellow boxes.
2. Hover the name plate, telephone, and red toolbox — a single flyover appears
   (`DocsGPT`, `Voice I/O`, `Settings`).
3. Hover **In** (upper trays) and **Out** (lower tray) — a list of actions
   appears. Click a line; the status bar at the bottom records it.
4. Hover the modem for **Enable** / **Disable**.

Nothing is sent to DocsGPT. Clicks only update the status bar.
