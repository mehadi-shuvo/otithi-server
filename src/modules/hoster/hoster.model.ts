import { Schema, model } from 'mongoose';
import { THoster } from './hoster.interface';

const hosterSchema = new Schema<THoster>({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String,
  location: {
    district: {
      type: String,
      required: true,
    },
    thana: {
      type: String,
      required: true,
    },
    roadOrVillage: {
      type: String,
      required: true,
    },
    home: {
      type: String,
      required: true,
    },
  },
  NID: {
    NIDNumber: {
      type: String,
      required: true,
    },
    NIDPicture: {
      type: String,
      required: true,
    },
  },
  hostID: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Hoster = model('THoster', hosterSchema);
