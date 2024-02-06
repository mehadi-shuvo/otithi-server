import { Types } from 'mongoose';

export interface TReview {
  roomID: Types.ObjectId;
  userName: {
    firstName: string;
    lastName: string;
  };
  resting: number; // 1-5
  feedback: string;
}

export interface TRoom {
  bedType: 'single' | 'double';
  roomType: 'AC' | 'NON-AC';
  SharedBathroom: boolean;
  rent: number;
  location: {
    district: string; // Dhaka
    Thana: string; // Mirpur
    roadOrVillage: string; // 10 / Shawrapara
    home: string;
    roomNumberOrFloor: string;
    mapLocation: string; // URL
  };
  owner: {
    name: {
      firstName: string;
      lastName: string;
    };
    phone: string; // Unique
    email: string; // Unique
    photo?: string; // Photo URL
    ownerID: Types.ObjectId; // MongoDB ObjectId
  };
  description: string;
}
