
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

### example of the IndexCreation via .js File
The current database to use. 
```
 use('basicsDB');
// Create an index on the 'name' field of the 'users' collection.
db.getCollection('users').createIndex({ name: 1 }); // 1 for ascending order, -1 for descending order   
```

### example of the Index Creation via Bash
```

basicsDB> use basicsDB
already on db basicsDB
basicsDB> db.getCollection('users').createIndex({ name: 1 })
name_1

```
Reason for acecnding order is that it will sort the index in ascending order, which can be useful for range queries and sorting results.
For example, if you want to find all users whose names start with a certain letter, an ascending index will allow you to quickly locate the starting point in the index and then iterate through the results in order.  This can be more efficient than searching through an unsorted collection.

- Minimal recommended index set for this collection would be to create an index on the 'name' field, as it is likely to be a common search criteria.  And the city field, as it may also be a common search criteria.  This would allow for efficient lookups based on these fields and improve query performance. However, the specific index set would depend on the specific use case and query patterns of the application. Which is what im working towards.


### Viewing the Query Plan

```
admin> use basicsDB
switched to db basicsDB
basicsDB> db.users.find({ city: "Nelson" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'basicsDB.users',
    parsedQuery: { city: { '$eq': 'Nelson' } },
    indexFilterSet: false,
    queryHash: 'DE2E7A09',
    planCacheShapeHash: 'DE2E7A09',
    planCacheKey: '818C7633',
    optimizationTimeMillis: 11,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: { city: { '$eq': 'Nelson' } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 2,
    executionTimeMillis: 23,
    totalKeysExamined: 0,
    totalDocsExamined: 6,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: { city: { '$eq': 'Nelson' } },
      nReturned: 2,
      executionTimeMillisEstimate: 0,
      works: 7,
      advanced: 2,
      needTime: 4,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 6
    }
  },
  queryShapeHash: '1C8DAF399C3C9A53DDEA4C42EF84DDCB56A742D2AEAC7BF0A6147C252AC10D95',
  command: { find: 'users', filter: { city: 'Nelson' }, '$db': 'basicsDB' },
  serverInfo: {
    host: '',
    port: 27017,
    version: '8.2.11',
    gitVersion: ''
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}




```

###### What the Query Plan is doing

- The mention of 'COLLSCAN' suggests MongoDB did not use an index.
- It scanned every document in the users collection.
- It checked each document to see if city == "Nelson"
- Normal when no Index exists

   - It scanned 6 documents in the collection
   - Out of the 6 it matched with 2
   - It took 23 milliseconds
   - For a larger dataset > 10,000 documents this may increase in time.
   - For a small dataset may get away with no index for matching documents for 'city'.

- Does it need an index?
 
###### What the Query Plan is doing now - after creating an Index on 'city'

```
basicsDB> db.getCollection('users').createIndex({ city: 1 })
city_1
basicsDB> db.users.find({ city: "Nelson" }).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'basicsDB.users',
    parsedQuery: { city: { '$eq': 'Nelson' } },
    indexFilterSet: false,
    queryHash: 'DE2E7A09',
    planCacheShapeHash: 'DE2E7A09',
    planCacheKey: '1D4DE2C1',
    optimizationTimeMillis: 8,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { city: 1 },
        indexName: 'city_1',
        isMultiKey: false,
        multiKeyPaths: { city: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { city: [ '["Nelson", "Nelson"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 2,
    executionTimeMillis: 13,
    totalKeysExamined: 2,
    totalDocsExamined: 2,
    executionStages: {
      isCached: false,
      stage: 'FETCH',
      nReturned: 2,
      executionTimeMillisEstimate: 0,
      works: 3,
      advanced: 2,
      needTime: 0,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      docsExamined: 2,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 2,
        executionTimeMillisEstimate: 0,
        works: 3,
        advanced: 2,
        needTime: 0,
        needYield: 0,
        saveState: 0,
        restoreState: 0,
        isEOF: 1,
        keyPattern: { city: 1 },
        indexName: 'city_1',
        isMultiKey: false,
        multiKeyPaths: { city: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { city: [ '["Nelson", "Nelson"]' ] },
        keysExamined: 2,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  queryShapeHash: '1C8DAF399C3C9A53DDEA4C42EF84DDCB56A742D2AEAC7BF0A6147C252AC10D95',
  command: { find: 'users', filter: { city: 'Nelson' }, '$db': 'basicsDB' },
  serverInfo: {
    host: '',
    port: ,
    version: '8.2.11',
    gitVersion: ''
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}


```
- Mongodb is now using the index:
   - We can see this in the 'IXSCAN -> FETCH'
   - It no longer scans the entire collection. It jumps to the index where the city == 'Nelson'
   - It only searched exactly for 'Nelson'. Fetched and returned only 2 documents from disk.
   - After creating an index on city, MongoDB switched from a COLLSCAN (scanning all documents) to an IXSCAN → FETCH plan. It examined only 2 index keys and 2 documents, instead of scanning the entire collection.



## Warnings when connecting to the Database
```
------
   The server generated these startup warnings when booting
   2026-07-07T10:45:12.546+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2026-07-07T10:45:13.201+00:00: For customers running the current memory allocator, we suggest changing the contents of the following sysfsFile
   2026-07-07T10:45:13.201+00:00: For customers running the current memory allocator, we suggest changing the contents of the following sysfsFile
   2026-07-07T10:45:13.201+00:00: We suggest setting the contents of sysfsFile to 0.
   2026-07-07T10:45:13.201+00:00: We suggest setting swappiness to 0 or 1, as swapping can cause performance problems.
------
```
MongoDB with WiredTiger performs best on XFS.

- Format the host disk/volume as XFS
- Mount that path
- Use it for your MongoDB volume
- disable THP
- set swappiness low
- avoid swap on the MongoDB host

Reason for THP Warnings:

https://www.mongodb.com/docs/manual/administration/tcmalloc-performance/#std-label-enable-thp
https://www.mongodb.com/docs/manual/tutorial/disable-transparent-huge-pages/

On a Linux host, for earlier versions of MongoDb it was recommended to disble the Transparent Huge Pages, as it could hinder the mmeory performance.
For later versions of MongoDb, TCMalloc uses a per-cpu cache to reduce the memory fragmentation.  MongoDB now performs better when THP is enabled because it reduces memory lookup overhead by treating many small memory pages as one large page.

Becuase im using a windows machine and docker setup - this would use the legacy TCMalloc version which does not support the updated TCMalloc for THP.

Reason for the Swapness to low Warnings:
Set the Swappiness parameter low to avoid swapping on the MongoDB host. In linux, this controls how agressive the system swaps space. Setting to '1' means, only when necessary will it swap. 

Mongodb is sensative to swapping. As this can slow down memory access, latency spikes and can freeze the database. This setting is meant to help MongoDB stay in RAM.

Because im running MongoDB inside Docker on Windows, swappiness cannot be tuned because the container runs under WSL2. MongoDB’s recommendation to set swappiness to 1 applies only to native Linux hosts.





