# SWENG 861 – Software Construction CRUD Project

**Author:** Charles Patterson
**Course:** SWENG 861 – Software Construction
**Program:** Penn State University - Master of Software Engineering

## Project Overview

This repository contains the course project for SWENG 861 – Software Construction. The project will be developed throughout the course and will demonstrate software construction practices through the implementation of a CRUD (Create, Read, Update, Delete) application.

The specific application and its requirements are currently **TBD** and will be updated as the project is defined.

## Technology Stack

The project will primarily use the following technologies:

* **Node.js** – Application runtime
* **JavaScript** – Primary programming language
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

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
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

The specific CRUD application is currently **TBD**.

## AI Use

Generative AI was used to assist with project documentation, and the creation of code logic block comments.