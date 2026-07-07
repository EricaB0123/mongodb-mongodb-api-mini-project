//Creating a Blank Database called 'basicsDB' and a collection called users

const database = 'basicsDB';
const collection = 'users';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

