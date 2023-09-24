// CREATE
// Insert a single document
db.collection('users').insertOne({ name: 'John', age: 30 });
// Insert multiple documents
db.collection('users').insertMany([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]);


//READ
// Find all documents in the collection
db.collection('users').find({}).toArray();

// Find documents matching a specific condition
db.collection('users').find({ age: { $gt: 25 } }).toArray();

// Find a single document by ID
db.collection('users').findOne({ _id: ObjectId('609a677cac87a12345678901') });



//UPDATE

// Update a single document
db.collection('users').updateOne(
    { name: 'Alice' },
    { $set: { age: 26 } }
  );
  
  // Update multiple documents
  db.collection('users').updateMany(
    { age: { $gt: 30 } },
    { $inc: { age: 1 } }
  );
  
  // Find a document and update it
  db.collection('users').findOneAndUpdate(
    { name: 'Bob' },
    { $set: { age: 36 } },
    { returnOriginal: false }
  );



  //DELETE
  
// Delete a single document
db.collection('users').deleteOne({ name: 'Alice' });

// Delete multiple documents
db.collection('users').deleteMany({ age: { $gte: 40 } });

// Find a document, delete it, and get the original document
db.collection('users').findOneAndDelete({ name: 'Bob' });