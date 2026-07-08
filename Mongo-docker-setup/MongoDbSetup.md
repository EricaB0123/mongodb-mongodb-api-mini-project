
# Mongodb setup 

## This section covers the Docker and MongoDB setup
- running MongoDB in Docker
- connecting to MongoDB
- the database creation
- collections and inserting documents
- creating a simple index


## What is set up right now:

- docker-compose.yml
- defines a mongo service using mongo:latest
- maps host port 27017 to container port 27017
- mounts a named volume mongo-data to /data/db
- reads MONGO_INITDB_ROOT_PASSWORD from an env variable  (this will updated later to a more secure way of passwords)


## What this means
- The MongoDB container is configured and can be started with: docker compose up -d
- The Visual Studio Code editor should now connect via bash or mongodb extension.

### Connecting to Mongo via Visual Studio 

1. Install the MongoDB extension
2. Open the MongoDB panel
3. Add a new connection string: mongodb://root:<your-password>@localhost:27017

### Connecting to Docker Via Visual Studio

docker compose up -d


### Example using the MongoDB extension via VisualStudioCode

<img width="932" height="912" alt="image" src="https://github.com/user-attachments/assets/1e98a547-79ff-4f02-8e80-99da016cf8c1" />


### Database get setup
I created a Database called 'BasicDB' and created a collection called 'users'.
Within Visual Studio i created 2 scripts the 'Database' creation and Basic 'CRUD' document. This crud document was a basic database insert.

To Load and create the Database, I used the extension within Visual Studio and tested out Git command and extension command pallets.

IN this example below. It's demonstring the creation and insert scripts created.
Then testing out the ability to connect to the database.
I did this with the docker command within the terminal.

<img width="1390" height="927" alt="image" src="https://github.com/user-attachments/assets/94c397b7-9633-47b8-beb3-493ee3574734" />

### connect to the Database and Check Data exists




I used the Docker Terminal to connect via admin user and Query via the 'basicsDB'.
The output was showing me the 3 'Documents'. 

<img width="940" height="894" alt="image" src="https://github.com/user-attachments/assets/e4747f9d-c172-4d1a-ae16-aedbdaeacfb5" />





