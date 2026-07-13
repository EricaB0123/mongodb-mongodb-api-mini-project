export async function createUser(db, user) {
  
  return db.collection('users').insertOne(user);
}   

export async function findUserByCity(db) {
  return db.collection('users').find({ city }).toArray();
}

export async function createCityIndex(db) {
    return db.collection('users').createIndex({ city: 1 });
}