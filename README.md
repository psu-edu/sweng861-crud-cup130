# SWENG 861 – Software Construction CRUD Project - Campus Rental (Housing)

**Author:** Charles Patterson 
**Course:** SWENG 861 – Software Construction 
**Program:** Penn State University - Master of Software Engineering

## Project Overview

This repository contains the course project for SWENG 861 – Software Construction. The project will be developed throughout the course and will demonstrate software construction practices through the implementation of a CRUD (Create, Read, Update, Delete) application.

The selected project is **Project B: Campus Rental (Housing)**.

## Technology Stack

The project will primarily use the following technologies:

* **Node.js** – Application runtime
* **JavaScript** – Primary programming language
* **Express** – Backend web application framework
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
* `GET /api/hello` – Returns a simple "Hello, World!" response.

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

## Project Status

**Current Status:** Initial project setup

**Selected Project:** Project B: Campus Rental (Housing)

The application is currently in the initial development phase. Additional functionality will be implemented throughout the course.

## AI Use

Generative AI was used to assist with project documentation and the creation of code logic block comments.