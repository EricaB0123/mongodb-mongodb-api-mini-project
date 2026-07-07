
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



