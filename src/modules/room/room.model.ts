// const ReviewSchema = new Schema({
//   roomID: {
//     type: Schema.Types.ObjectId,
//     required: true,
//   },
//   userName: {
//     firstName: {
//       type: String,
//       required: true,
//     },
//     lastName: {
//       type: String,
//       required: true,
//     },
//   },
//   resting: {
//     type: Number,
//     min: 1,
//     max: 5,
//     required: true,
//   },
//   feedback: {
//     type: String,
//     required: true,
//   },
// });

import { Schema, model } from 'mongoose';
import { TRoom } from './room.interface';

const RoomSchema = new Schema<TRoom>({
  bedType: {
    type: String,
    enum: ['single', 'double'],
    required: true,
  },
  roomType: {
    type: String,
    enum: ['AC', 'NON-AC'],
    required: true,
  },
  SharedBathroom: {
    type: Boolean,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  location: {
    district: {
      type: String,
      required: true,
    },
    Thana: {
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
    roomNumberOrFloor: {
      type: String,
      required: true,
    },
    mapLocation: {
      type: String,
      required: true,
    },
  },
  owner: {
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
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    photo: {
      type: String,
    },
    ownerID: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  description: {
    type: String,
    required: true,
  },
});

export const Room = model<TRoom>('Room', RoomSchema);
