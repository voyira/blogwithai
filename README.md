# BlogWithAI

Modern full-stack blog platform that lets readers browse AI-enhanced articles, leave comments, and gives admins the ability to publish, moderate, and even generate blog drafts via Gemini.

## Features
- Responsive React front end with category filtering, instant search, and detailed article view.
- Commenting workflow with moderation: user submissions are stored and only displayed once approved.
- Admin-only endpoints to create, delete, and toggle blog visibility, plus optional content generation via Gemini.
- Image upload pipeline that optimizes assets through ImageKit before persisting metadata in MongoDB.

## Tech Stack
- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Axios, React Router.
- **Backend:** Node.js, Express 5, MongoDB + Mongoose, Multer for uploads, ImageKit SDK, Google Gemini API.
- **Tooling:** Nodemon for local dev server reloads, ESLint for linting, React Hot Toast for notifications.

## Prerequisites
- Node.js 18+ and npm.
- MongoDB database (local or Atlas).
- ImageKit account (or replace with another image host).
- Google Gemini API key (required only if you plan to use AI content generation).

## Setup
```bash
git clone <repo-url>
cd blogwithai
```

Install dependencies for each workspace:
```bash
cd client && npm install
cd ../server && npm install
```

## Environment Variables

Create `client/.env`:
```
VITE_BASE_URL=http://localhost:3000
```
> Adjust the URL if your API runs elsewhere.

Create `server/.env` (replace values with your secrets):
```
MONGODB_URI=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

GEMINI_API_KEY=
```
Leave any unused providers (e.g., Cloudinary) blank or remove them.

## Running Locally

Start the backend (default port 3000):
```bash
cd server
npm run server    # uses nodemon
# or npm start    # vanilla node
```

Start the frontend (default Vite port 5173):
```bash
cd client
npm run dev
```

The React app will proxy API calls to `VITE_BASE_URL`, so make sure the Express server is reachable there.

## Useful Scripts

| Location | Script | Description |
| -------- | ------ | ----------- |
| `client` | `npm run dev` | Start Vite dev server |
|          | `npm run build` | Production build |
|          | `npm run preview` | Preview built assets |
|          | `npm run lint` | Run ESLint |
| `server` | `npm run server` | Express dev server with nodemon |
|          | `npm start` | Run Express server once |

## API Overview

| Method | Path | Description | Auth |
| ------ | ---- | ----------- | ---- |
| `GET` | `/api/blog/all` | Public list of published blogs | None |
| `GET` | `/api/blog/:blogId` | Fetch single blog | None |
| `POST` | `/api/blog/comments` | Fetch approved comments for a blog | None |
| `POST` | `/api/blog/add-comment` | Submit a new comment (awaiting approval) | None |
| `POST` | `/api/blog/add` | Create blog with image upload | Admin |
| `POST` | `/api/blog/delete` | Delete blog + its comments | Admin |
| `POST` | `/api/blog/toggle-publish` | Toggle publish state | Admin |
| `POST` | `/api/blog/generate` | Ask Gemini for content ideas | Admin |

> Admin routes expect an `Authorization` header containing the JWT issued during admin login (see `/api/admin/*` routes).

## Development Tips
- Keep the server running when working on the client to avoid “Failed to load resource” errors.
- If you change the API port, update `VITE_BASE_URL`.
- Tailwind classes live directly in JSX; restarting `npm run dev` helps when adding new class names if IntelliSense lags.

Happy hacking!
