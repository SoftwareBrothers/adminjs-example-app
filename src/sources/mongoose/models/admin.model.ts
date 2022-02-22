import { model, Schema } from 'mongoose';

export interface Admin {
  email: string;
  password: string;
}

const schema = new Schema<Admin>({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
});

export const AdminModel = model<Admin>('Admin', schema);
