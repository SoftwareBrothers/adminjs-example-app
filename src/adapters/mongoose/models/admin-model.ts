import mongoose from 'mongoose';

const { Schema } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;
