# Exercise 1

**Italiano:**
Scaffolding manuale: il nostro primo server (esercizio guida). Crea manualmente lo scaffolding di un progetto Node.js/Express senza generatori automatici. Il server deve rispondere su `http://localhost:3000/` con un messaggio di benvenuto. Passaggi: cartella in VS Code, `pnpm init`, `pnpm add express`, ES Modules + script dev con `node --watch`, `server.js` (importa Express, crea l'app, scegli porta, GET /, avvia) + `.gitignore`. Commenta i passaggi principali.

**English:**
Manual scaffolding: our first server (guided exercise). Manually scaffold a Node.js/Express project from scratch without automatic generators. The server must respond on `http://localhost:3000/` with a welcome message. Steps: folder in VS Code, `pnpm init`, `pnpm add express`, ES Modules + dev script with `node --watch`, `server.js` (import Express, create the app, choose port, GET /, start) + `.gitignore`. Comment the main steps.

## Reasoning

**Italiano:**

```text
INIZIO
  INIZIALIZZA il progetto con il package manager (pnpm init)
  INSTALLA la dipendenza Express (pnpm add express)
  CONFIGURA package.json:
    IMPOSTA "type": "module" per abilitare gli ES Modules
    AGGIUNGI lo script dev con watch mode ("node --watch server.js")
  CREA il file .gitignore:
    IGNORA node_modules/ e i file di ambiente
  CREA il file server.js:
    IMPORTA Express e CORS
    INIZIALIZZA l'applicazione Express
    DEFINISCI la porta PORT = 3000
    CONFIGURA i middleware globali (cors, express.json)
    DEFINISCI la rotta GET "/" -> INVIA messaggio di benvenuto
    DEFINISCI la rotta GET "/error" -> INOLTRA errore di test con next()
    DEFINISCI la rotta GET "/favicon.ico" -> RISPONDI con status 204 No Content
    DEFINISCI il gestore errori globale -> INTERCETTA gli errori, LOGGA i dettagli e RISPONDI con status 500 JSON
    AVVIA il server in ascolto su PORT
FINE
```

**English:**

```text
START
  INITIALIZE project with package manager (pnpm init)
  INSTALL Express dependency (pnpm add express)
  CONFIGURE package.json:
    SET "type": "module" for ES Modules support
    ADD dev script with watch mode ("node --watch server.js")
  CREATE .gitignore:
    IGNORE node_modules/ and environment files
  CREATE server.js:
    IMPORT Express and CORS
    INITIALIZE Express application
    SET PORT to 3000
    CONFIGURE global middlewares (cors, express.json)
    DEFINE route GET "/" -> SEND welcome message
    DEFINE route GET "/error" -> FORWARD test error using next()
    DEFINE route GET "/favicon.ico" -> SEND status 204 No Content
    DEFINE global error handler -> CATCH errors, LOG details, RETURN status 500 JSON
    START server listening on PORT
END
```
