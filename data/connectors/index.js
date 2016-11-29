import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  model: String,
  registrationNo: String,
  owner: { type: String, ref: 'User' },
});

const UserSchema = new mongoose.Schema({
  displayName: String,
  email: String,
  firstName: String,
  lastName: String,
  birthday: String,
});

export const User = mongoose.model('User', UserSchema);
export const Car = mongoose.model('Car', CarSchema);

export const MongooseConnection = mongoose.connect('mongodb://localhost:27017/test')
  .catch((connectError) => {
    console.error('Could not connect to MongoDB on port 27017', connectError);
  });
