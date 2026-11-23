# Student Management System

Full-stack app for listing, adding, editing, and deleting students. The React frontend calls the Express API. The API stores students in PostgreSQL.

## Live demo

| Part | URL |
|---|---|
| App | https://alpha-frontend-student-management-4mcb.onrender.com |
| Student list | https://alpha-frontend-student-management-4mcb.onrender.com/students |
| API | https://alpha-backend-student-management-fila.onrender.com |
| Health check | https://alpha-backend-student-management-fila.onrender.com/health |

The first request can take up to a minute while the free Render services wake up.

## Project folders

```text
alpha-frontend-student-management/   React + Vite
alpha-backend-student-management/    Express + PostgreSQL
```

## Run it locally

Use Node.js 18 or newer and PostgreSQL.

### 1. Backend

```bash
cd alpha-backend-student-management
npm install
cp .env.example .env
```

Set the database values in `.env`, then create the database and tables:

```bash
createdb student_management
npm run db:migrate
npm run dev
```

The API listens on http://localhost:3000. Check it with http://localhost:3000/health.

If the API requires a key, set `API_SECRET_KEY` in the backend `.env`. Requests must send that same value in the `API-Key` header.

### 2. Frontend

```bash
cd alpha-frontend-student-management
npm install
cp .env.example .env
```

Point the frontend at the local API:

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_KEY=the-same-value-as-API_SECRET_KEY
```

`VITE_API_BASE_URL` must end at `/api`. The app adds `/students` itself.

```bash
npm run dev
```

Open http://localhost:5173.

The backend only accepts the deployed frontend address unless `http://localhost:5173` is also listed in `allowedOrigins` in `alpha-backend-student-management/src/server.js`.

## Do not commit

Never commit `.env`. It holds the database password and the API key.
