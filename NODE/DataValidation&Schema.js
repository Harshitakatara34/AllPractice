// In Mongoose, you can handle data validation and schema enforcement like this:


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 20,
  },
  age: {
    type: Number,
    min: 18,
  },
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
  username: 'john_doe',
  age: 25,
});

newUser.save()
  .then((user) => console.log('User saved:', user))
  .catch((err) => console.error('Validation error:', err.message));


//   In this example, we define a schema for a user with rules like "username must be between 4 and 20 characters" 
//   and "age must be at least 18." Mongoose enforces these rules when saving data, ensuring that it meets the specified 
//   criteria.




// In Mongoose, think of data validation and schema enforcement like having a set of rules for a game. 
// You define these rules for your data,