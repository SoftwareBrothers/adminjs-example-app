import { model, Schema } from 'mongoose';

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export interface User {
  firstName: string;
  lastName: string;
  gender: Gender;
  email: string;
  isMyFavourite: boolean;
}

export const UserSchema = new Schema<User>({
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  gender: { type: 'String', required: true, enum: Gender },
  email: { type: 'String', required: true },
  isMyFavourite: { type: 'Boolean', required: true },
});

export const UserModel = model<User>('User', UserSchema);
