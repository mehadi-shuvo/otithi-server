import { Schema, model } from 'mongoose';
import { TSuperAdmin } from './superAdmin.interface';

const superAdminSchema: Schema<TSuperAdmin> = new Schema({
  userName: {
    type: String,
    enum: ['ADMIN'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    enum: ['super-admin'],
    required: true,
  },
  email: {
    type: String,
    enum: ['admin@gmail.com'],
    required: true,
  },
});

const SuperAdmin = model<TSuperAdmin>('SuperAdmin', superAdminSchema);

export default SuperAdmin;
