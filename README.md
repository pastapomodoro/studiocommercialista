# Commercialista App

Un'applicazione web moderna per la gestione dell'attività di commercialista, sviluppata con Next.js, Tailwind CSS e shadCN/ui.

## Tecnologie Utilizzate

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Per un codice più sicuro e maintainibile
- **Tailwind CSS** - Framework CSS utility-first
- **shadCN/ui** - Componenti UI accessibili e personalizzabili
- **Lucide React** - Icone moderne

## Funzionalità

- 📊 Dashboard principale con panoramica delle funzionalità
- 👥 Gestione clienti
- 📄 Creazione e gestione fatture elettroniche
- 📊 Monitoraggio contabile
- 📈 Generazione report e analisi finanziarie

## Come iniziare

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

3. **Apri il browser** e vai su [http://localhost:3000](http://localhost:3000)

## Struttura del Progetto

```
commercialista/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Comandi Disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Costruisci l'applicazione per la produzione
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegui il linter

## Personalizzazione

L'applicazione utilizza shadCN/ui per i componenti, che possono essere facilmente personalizzati modificando:

- I colori nel file `src/app/globals.css`
- La configurazione Tailwind in `tailwind.config.js`
- I componenti individualmente nella cartella `src/components/ui/`

## Contributi

Questo progetto è stato creato come base per un'applicazione di gestione commercialista. Sentiti libero di contribuire aggiungendo nuove funzionalità o migliorando l'interfaccia utente.
