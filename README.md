# SWENG 861 – Software Construction CRUD Weekly Project

**Author:** Charles Patterson 
**Course:** SWENG 861 – Software Construction 
**Program:** Penn State University - Master of Software Engineering

## Project Overview

This repository contains coursework and development exercises for SWENG 861 – Software Construction. The repository will be used throughout the course to implement, test, and demonstrate software construction concepts and development practices.

Code, configurations, documentation, and supporting resources will be added as weekly course assignments are completed.

## Technology Stack

The project will primarily use the following technologies:

* **Node.js** – Application runtime
* **JavaScript** – Primary programming language
* **Express** – Backend web application framework
* **PostgreSQL** – Relational database for application data
* **Auth0** – External identity provider for OIDC authentication
* **Docker / Docker Compose** – Local application and database environment
* **Git** – Source control
* **GitHub** – Repository hosting and collaboration
* **ESLint** – Static code analysis and linting
* **Husky** – Git hooks and local quality guardrails
* **Azure** – Cloud services as required by course assignments

Additional frameworks, databases, and services will be documented as they are introduced.

## Getting Started

### Prerequisites

* Git
* Node.js
* npm
* Visual Studio Code

### Recommended VS Code Extensions

The following Visual Studio Code extensions are recommended for development:

* **ESLint** – JavaScript linting and static code analysis
* **Prettier - Code formatter** – Consistent source code formatting
* **GitHub Pull Requests** – GitHub pull request and issue integration
* **Docker** – Docker and container development support
* **Azure Resources** – Azure resource integration
* **REST Client** – API testing directly from Visual Studio Code
* **GitHub Copilot** – Generative AI development assistance

### Clone the Repository

```bash
git clone https://github.com/psu-edu/sweng861-crud-cup130.git
cd sweng861-crud-cup130
```

### Install Dependencies

```bash
npm install
```

### Run the Application

Start the Node.js backend application from the project root:

```bash
npm start
```

By default, the application will run at:

```text
http://localhost:3000
```

### API Endpoints

The following endpoints are currently available:

* `GET /health` – Verifies that the API is running and returns a status response.
* `GET /api/hello` – Protected endpoint that requires a valid Auth0 access token and returns a personalized greeting.

Example:

```bash
curl http://localhost:3000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

### Code Quality

Run ESLint to perform static code analysis:

```bash
npm run lint
```

A successful lint check will complete without reporting any errors.

## Authentication and API Security

### Authentication Strategy

The application uses **Option B: External Identity Provider / OIDC** with Auth0. Auth0 handles user authentication and issues access tokens, allowing the application to avoid storing or validating user passwords directly.

After a successful login, the authenticated user's provider ID, email, and display name are created or updated in the local PostgreSQL `users` table.

### Login Flow

The user initiates authentication through the application's `/login` route and is redirected to Auth0 Universal Login. After successful authentication, Auth0 redirects the user back to the application through `/callback`.

The authenticated Auth0 identity is synchronized with the local PostgreSQL user record. Protected API requests provide the Auth0 access token using the `Authorization: Bearer <token>` header.

The `GET /api/hello` endpoint uses authentication middleware to validate the token before allowing access. Requests without a valid token return `401 Unauthorized`.

### OWASP API Security Practices

**Broken Authentication:** Authentication is delegated to Auth0 using OIDC. Protected API requests require a valid Auth0 access token, which is validated for the expected issuer and audience before the request reaches the protected endpoint. Authentication failures return a generic `401 Unauthorized` response without exposing internal validation details.

**Broken Object Level Authorization (BOLA):** The application derives the authenticated user's identity from the validated Auth0 token rather than accepting a user ID supplied by the client. The trusted provider user ID is then used to associate the request with the corresponding local user record.

## Project Status

**Current Status:** Active Course Development

This repository will be updated throughout SWENG 861 as weekly assignments, exercises, and development activities are completed.

## AI Use

Generative AI was used to assist with project documentation and the creation of code logic block comments.