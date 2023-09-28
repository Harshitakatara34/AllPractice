// CREATE
// Insert a single document
db.user.insertOne({ name: 'John', age: 30 });
// Insert multiple documents
db.user.insertMany([
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
]);




//READ
// Find all documents in the collection
db.user.find({}).toArray();

// Find documents matching a specific condition
db.user.find({ age: { $gt: 25 } }).toArray();

// Find a single document by ID
db.user.findOne({ _id: ObjectId('609a677cac87a12345678901') });


//UPDATE


// Update a single document
db.user.updateOne(
    { name: 'Alice' },
    { $set: { age: 26 } }
  );
  
  // Update multiple documents
  db.user.updateMany(
    { age: { $gt: 30 } },
    { $inc: { age: 1 } }
  );
  
  // Find a document and update it
  db.user.findOneAndUpdate(
    { name: 'Bob' },
    { $set: { age: 36 } },
    { returnOriginal: false }
  );



  //DELETE
  
// Delete a single document
db.user.deleteOne({ name: 'Alice' });

// Delete multiple documents
db.user.deleteMany({ age: { $gte: 40 } });

// Find a document, delete it, and get the original document
db.user.findOneAndDelete({ name: 'Bob' });