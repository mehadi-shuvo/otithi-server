// import { response } from 'express';

import { Request, Response } from 'express';
import { roomServices } from './room.services';

const createRoom = async (req: Request, res: Response) => {
  const result = await roomServices.createRoomIntoDB(req.body);
  res.status(200).json({
    statusCode: 200,
    data: result,
  });
};
const getAllRoom = async (req: Request, res: Response) => {
  const result = await roomServices.getAllRoomFromDB();
  res.status(200).json({
    statusCode: 200,
    data: result,
  });
};

export const roomControllers = {
  createRoom,
  getAllRoom,
};
