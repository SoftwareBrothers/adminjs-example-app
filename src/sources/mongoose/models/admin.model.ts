import { model, Schema } from 'mongoose';

export interface Admin {
  email: string;
  password: string;
}

export const AdminSchema = new Schema<Admin>({
  email: { type: 'String', required: true },
  password: { type: 'String', required: true },
});

export const AdminModel = model<Admin>('Admin', AdminSchema);
