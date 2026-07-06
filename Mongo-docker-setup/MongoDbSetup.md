
## What is set up right now:

- docker-compose.yml
- defines a mongo service using mongo:latest
- maps host port 27017 to container port 27017
- mounts a named volume mongo-data to /data/db
- reads MONGO_INITDB_ROOT_PASSWORD from an env variable

## What this means
- The MongoDB container is configured and can be started with: docker compose up -d
- The Visual Studio Code editor should now connect via bash or mongodb extension.

### Example Below is using the MongoDB extension CMDline

!<img width="972" height="917" alt="Connecting to Mongo DB in Docker" src="https://github.com/user-attachments/assets/572824ab-8aaa-4178-9486-11e99cc41f90" />


