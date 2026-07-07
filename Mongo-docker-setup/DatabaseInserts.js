//Once the Database is create. We are now loading data into the database.


// The current database to use.
use('basicsDB');

// Create a new document in the collection.
db.getCollection('users').insertOne({

    name: "Erica", city: "Nelson", steps: 5000

});


db.getCollection('users').insertMany([
    // When inserting multiple documents, we can use an array of objects. Notice the [] brackets cmpared to the singular {} when doing an insetone
    // Each object in the array represents a document to be inserted.
    // In this case, we are inserting two documents into the 'users' collection.
    // The first document has the name "John", city "New York", and steps 10000.
    {name: "John", city: "New York", steps: 10000},
    // The second document has the name "Trish", city "Australia", and steps 9000.      
    {name: "Trish", city: "Australia", steps: 9000}

]);
