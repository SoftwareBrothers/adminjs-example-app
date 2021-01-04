import mongoose from 'mongoose';

const Thing = mongoose.model(
  'Thing',
  new mongoose.Schema({
    name: String,
    users: [
      {
        role: String,
        userId: {
          type: mongoose.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    details: {
      description: { type: String, required: true },
      isAvailable: Boolean,
    },
  }),
);

export default Thing;
