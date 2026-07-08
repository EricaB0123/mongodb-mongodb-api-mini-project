
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


#### Docker Setup

I've setup docker-compose.yml, this defines the container using a single file. This defines the Port, volumes, container and volume.

```
version: '3.8'
services:
  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    environment:
      MONGO_INITDB_ROOT_USERNAME: 
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
volumes:
  mongo-data:

```
##### Example of the Container Configuration within Docker GUI 

Example of the Container Configuration within Docker GUI, based on the YML file.

<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/531f8693-dc2f-4375-91be-4a2b06df0a82" />

##### Example of the Container Running within Docker

Example of the Service running. You can either start the service within the GUI or within Bash.

<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/ccd33605-3dee-4e7a-a133-0d9ce1c92ffe" />

To start the Docker container the .yml (Docker Compose) file within visual studio code, you can use:

```
docker compose up -d

```

### Connecting to Mongo via Visual Studio 

1. Install the MongoDB extension
2. Open the MongoDB panel
3. Add a new connection string: mongodb://root:<your-password>@localhost:27017


### Example using the MongoDB extension via VisualStudioCode

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/1e98a547-79ff-4f02-8e80-99da016cf8c1" />

### Connect to the Database and Check Data exists

I used the Docker Terminal to connect via admin user and Query via the 'basicsDB'.


### Database get setup
I created a Database called 'BasicDB' and created a collection called 'users'.
Within Visual Studio i created 2 scripts the 'Database' creation and Basic 'CRUD' document. This crud document was a basic database insert.

To Load and create the Database, I used the extension within Visual Studio and tested out Git command and extension command pallets.

In this example below. It's demonstring the creation and insert scripts created.
Then testing out the ability to connect to the database.
I did this with the docker command within the terminal.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/94c397b7-9633-47b8-beb3-493ee3574734" />

The output was showing me the 3 'Documents'. 

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/e4747f9d-c172-4d1a-ae16-aedbdaeacfb5" />

## Index Usage
Planning on looking up users by name, so we will create an index on the name field. This will make lookups by name faster.

### For example
The current database to use. 
```
 use('basicsDB');
// Create an index on the 'name' field of the 'users' collection.
db.getCollection('users').createIndex({ name: 1 }); // 1 for ascending order, -1 for descending order   
```
Reason for acecnding order is that it will sort the index in ascending order, which can be useful for range queries and sorting results.
For example, if you want to find all users whose names start with a certain letter, an ascending index will allow you to quickly locate the starting point in the index and then iterate through the results in order.  This can be more efficient than searching through an unsorted collection.

- Minimal recommended index set for this collection would be to create an index on the 'name' field, as it is likely to be a common search criteria.  And the city field, as it may also be a common search criteria.  This would allow for efficient lookups based on these fields and improve query performance. However, the specific index set would depend on the specific use case and query patterns of the application. Which is what im working towards.



