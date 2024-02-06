export interface THoster {
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string; // Unique
  email: string; // Unique
  photo?: string; // Photo URL
  location: {
    district: string; // Dhaka
    thana: string; // Mirpur
    roadOrVillage: string; // 10 / Shawrapara
    home: string;
  };
  NID: {
    NIDNumber: string;
    NIDPicture: string;
  };
  hostID: string;
  password: string;
}
