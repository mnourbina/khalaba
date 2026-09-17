# KHALABA

Plateforme souveraine de santé maternelle et infantile — Tchad first.

## Deux livrables

1. **Démo PWA** — dossier `pwa/` · OTP `123456` · cloisonnement par zone
2. **Socle Next.js 15** — Prisma, RBAC, alertes OMS, App Router

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind · Prisma · PostgreSQL VPS · OTP · DHIS2

```bash
cp .env.example .env
npm install
npx prisma generate
npm run dev
```

Aucun cloud tiers pour les dossiers médicaux.

- Cursor — `docs/CURSOR.md`
- Claude Code — `docs/CLAUDE.md`
