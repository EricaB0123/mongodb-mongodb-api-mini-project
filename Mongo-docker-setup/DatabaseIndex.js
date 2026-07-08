//Planning on looking up users by name, so we will create an index on the name field. This will make lookups by name faster.
// The current database to use.
use('basicsDB');    

// Create an index on the 'name' field of the 'users' collection.
db.getCollection('users').createIndex({ name: 1 }); // 1 for ascending order, -1 for descending order   

/*Reason for acecnding order is that it will sort the index in ascending order, which can be useful for range queries and sorting results.
For example, if you want to find all users whose names start with a certain letter, an ascending index will allow you to quickly locate the starting point in the index and then iterate through the results in order. 
This can be more efficient than searching through an unsorted collection.*/

