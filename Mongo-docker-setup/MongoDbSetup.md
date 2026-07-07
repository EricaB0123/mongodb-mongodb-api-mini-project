
## What is set up right now:

- docker-compose.yml
- defines a mongo service using mongo:latest
- maps host port 27017 to container port 27017
- mounts a named volume mongo-data to /data/db
- reads MONGO_INITDB_ROOT_PASSWORD from an env variable  (this will updated later on to a more secure way of passwords)

## What this means
- The MongoDB container is configured and can be started with: docker compose up -d
- The Visual Studio Code editor should now connect via bash or mongodb extension.

### Example using the MongoDB extension via VisualStudioCode

<img width="972" height="917" alt="Connecting to Mongo DB in Docker" src="https://github.com/user-attachments/assets/922bf7de-2875-4824-8d24-ed8616769db7" />

### How  the Database get setup
I created a Database called 'BasicDB' and created a collection called 'users'.
Within Visual Studio i created 2 scripts the 'Database' creation and Basic 'CRUD' document. This crud document was a basic database insert.

To Load and create the Database, I used the extension within Visual Studio and tested out Git command and extension command pallets.

IN this example below. It's demonstring the creation and insert scripts created.
Then testing out the ability to connect to the database.
I did this with the docker command within the terminal.

<img width="1390" height="927" alt="image" src="https://github.com/user-attachments/assets/94c397b7-9633-47b8-beb3-493ee3574734" />




