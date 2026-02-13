# English Course App

Fast-track to English fluency in 6 months: daily micro-lessons, pronunciation drills, and AI tutoring.

## Overview
- Stack: Next.js 14 (App Router) + TypeScript
- AI: OpenAI (same API this assistant uses) for micro-lessons and tutoring
- DB: PostgreSQL + Prisma ORM
- Infra: Dockerfile + docker-compose for local dev
- Pages: Home, Dashboard, Lessons, Practice
- Goal: practical, daily 10–15 min learning that compounds into fluency in ~6 months

## Features
- Personalized micro-lessons by topic/level (Practice page)
- Progress tracking (streak, words learned, lessons done)
- Friendly, concise outputs (PT-BR + EN friendly)
- Production-ready Docker setup

## Quick Start (Local Dev)
Requirements:
- Node.js >= 20, pnpm (or npm/yarn)
- Docker (optional but recommended)

Steps:
1) Clone and install
```
pnpm i
# or: npm i / yarn
```
2) Create env file
```
cp .env.example .env
# set OPENAI_API_KEY and (optionally) adjust DATABASE_URL
```
3) Run dev server
```
pnpm dev
# open http://localhost:3000
```

## Running with Docker (Recommended)
```
docker compose up -d --build
# Next.js on http://localhost:3000, Postgres on localhost:5432
```
Then (optional) generate Prisma client inside the container:
```
docker compose exec web pnpm prisma:generate
```
To stop:
```
docker compose down
```

## Database & Prisma
- DB: PostgreSQL 16 (docker-compose)
- ORM: Prisma 5

Migrate & generate locally:
```
pnpm prisma:generate
pnpm prisma:migrate
```
Seed (optional):
```
pnpm seed
```
Connection string (DATABASE_URL):
```
postgresql://postgres:postgres@db:5432/english?schema=public
```

## Environment Variables
Create .env from .env.example:
```
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://postgres:postgres@db:5432/english?schema=public
```
Notes:
- Use the same OpenAI API you already use with this assistant.
- Never commit real secrets. .env is gitignored.

## API Endpoints
- GET /api/progress → { progress: { streak, wordsLearned, lessonsDone } }
- POST /api/generate { topic, level } → returns a concise micro-lesson (text)

## Deployment
### Vercel (recommended)
- Import this repo
- Set env vars (OPENAI_API_KEY, DATABASE_URL)
- Build command: `pnpm build` (Node 20+)
- Next.js runtime: Node.js

### Render / Fly.io / Railway
- Build with `pnpm build`; start with `pnpm start -p 3000`
- Provide Postgres (managed) and the same env vars

## Security & Cost Control
- Keep OPENAI_API_KEY secret; rotate if exposed
- Use smaller models for drafts (e.g., gpt-4o-mini) and switch up for evaluations if needed
- Add basic rate limiting at the API layer (future work)

## Roadmap (6 months to fluency)
- Phase 1: core curriculum + daily micro-lessons (weeks 1–4)
- Phase 2: spaced repetition + weekly review (weeks 5–8)
- Phase 3: speaking drills + feedback loops (weeks 9–16)
- Phase 4: real-world tasks + mock interviews (weeks 17–24)

## Troubleshooting
- If Docker Postgres isn’t ready, retry Prisma generate/migrate after a few seconds
- Check `.env` is present and keys are set
- Use `docker compose logs -f web db` for live logs
