# MongoDB Mini Project — Docker + API (In Progress)

A hands‑on mini‑project demonstrating how to run MongoDB in Docker, connect via VS Code, design collections, and (soon) expose CRUD and aggregation operations through a Node.js API. This project is part of my transition from Senior Database Administrator to Data Platform Engineer, showcasing modern data‑platform tooling, containerisation, and NoSQL fundamentals.

##  Project Goals
- Build a containerised MongoDB environment using Docker
- Connect and manage MongoDB using VS Code MongoDB extension
- Design collections and insert sample documents
- Implement CRUD operations via a Node.js API (in progress)
- Demonstrate indexing and aggregation pipelines (planned)
- Deploy a cloud version using MongoDB Atlas (planned)

##  Tech Stack
- MongoDB Community Edition (Docker container)
- Docker Desktop
- VS Code MongoDB Extension
- Node.js + Express API (coming soon)
- MongoDB Atlas (planned)

## Docker Setup
- The project includes a full Docker setup for running MongoDB locally:
- Pulling MongoDB image
- Running container with mounted volume
- Connecting via VS Code
- Creating collections and inserting documents
- See: Mongo- docker- setup/MongoDbSetup.md for detailed steps.

## Project Structure
Code
mongodb- mongodb- api- mini- project/
│
├── Mongo- docker- setup/
│   └── MongoDbSetup.md
│
├── src/                # API source code (in progress)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
├── screenshots/        # Docker, VS Code, API examples
│
└── README.md

## API Endpoints (Coming Soon)
The API will expose the following:

CRUD
POST /items — Create

GET /items — Read all

GET /items/:id — Read one

PUT /items/:id — Update

DELETE /items/:id — Delete

Aggregation Examples
/items/stats — Basic pipeline

/items/grouped — Grouping + sorting

/items/search — Text search

Indexing Demo
Creating indexes

Measuring performance differences

## Testing (Planned)
- Postman collection
- Automated tests using Jest
- Example API calls

## Security Considerations
- .env file for secrets
- No credentials committed
- Notes on production hardening
- Planned: Atlas access rules + IP whitelisting

## MongoDB Atlas Version (Planned)
- A cloud‑hosted version of the project will include:
- Atlas cluster setup
- Connection string configuration
- Screenshots of cloud collections
- Differences between local Docker vs Atlas

## Screenshots
Screenshots include:
Docker container running
VS Code MongoDB extension
Sample documents
(Soon) API responses
(Soon) Atlas dashboard

#Roadmap
[x] Docker MongoDB setup
[x] VS Code MongoDB connection
[ ] Build Node.js API
[ ] Add CRUD endpoints
[ ] Add aggregation examples
[ ] Add indexing examples
[ ] Add MongoDB Atlas deployment
[ ] Add Postman collection
[ ] Add Jest tests
[ ] Add GitHub Actions CI/CD

## What I Learned
-  How MongoDB differs from SQL Server in schema design
-  How Docker volumes persist database files
-  How to use the VS Code MongoDB extension for browsing collections
-  How to structure a small API project around MongoDB
-  The importance of separating local and cloud environments
-  How NoSQL thinking changes data modelling decisions


# About Me
I’m Erica — a Senior Database Administrator transitioning into Data Platform Engineering, building modern data skills across SQL Server, PostgreSQL, Oracle, MongoDB, and AWS.
