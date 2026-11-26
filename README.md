# KoraCart

**Many sellers. One seamless marketplace.**

KoraCart is a cloud-first, multi-vendor e-commerce platform built with React, Django REST Framework and Neon PostgreSQL.

## Architecture

- `frontend/`: React + Vite + TypeScript + Tailwind CSS
- `backend/`: Django + Django REST Framework
- Database: Neon PostgreSQL (configured through environment variables)
- Deployment: Cloudflare Pages (frontend) and Render (backend)

## Initial milestone

This repository contains the branded application foundation:
- Responsive KoraCart storefront landing page
- Django REST API health endpoint
- Environment-based configuration
- Cloud deployment configuration
- GitHub Actions checks

Marketplace features (authentication, vendor onboarding, catalogue, cart, checkout, Paystack, order tracking and Nylas email) will be delivered incrementally.

## Development policy

The project is designed for cloud deployment. You do not need to run the application locally to deploy it. GitHub pushes trigger the configured CI/CD workflows.

## Repository structure

```text
koracart/
├── .github/workflows/
├── backend/
│   ├── apps/core/
│   ├── config/
│   ├── manage.py
│   ├── build.sh
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
├── .gitignore
└── README.md
```

## Required environment variables

### Backend

See `backend/.env.example`. At minimum configure:
- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DATABASE_URL`
- `CORS_ALLOWED_ORIGINS`

### Frontend

Set `VITE_API_BASE_URL` to the deployed backend origin, including `/api`.

Do not commit real credentials or secret keys.

## Deployment

### Backend on Render

Create a **Web Service** using the repository:
- Root directory: `backend`
- Build command: `./build.sh`
- Start command: `gunicorn config.wsgi:application`
- Health check path: `/api/health/`

Set the backend environment variables from `backend/.env.example`. Use the Neon pooled connection string for normal application traffic. Ensure SSL is enabled in the Neon connection string.

### Frontend on Cloudflare Pages

Create a Pages project connected to this repository:
- Root directory: `frontend`
- Build command: `npm run build`
- Build output directory: `dist`
- Environment variable: `VITE_API_BASE_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

Cloudflare Pages builds the React application on each push to the connected branch.

### GitHub Actions

The included workflow runs frontend build validation and backend Django system checks on pushes and pull requests. The frontend build does not require local Node.js installation.

## Initial admin account

No administrator account or default password is created by this starter. Create one securely after the backend is deployed using a one-off Render Shell command:

```bash
python manage.py createsuperuser
```

## Important

The initial release is the deployment foundation, not the completed marketplace. Payment, email, vendor and order workflows must be implemented and tested in later milestones before the platform is used for real transactions.
