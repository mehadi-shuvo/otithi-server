import { Request, Response } from 'express';
import { hosterServices } from './hoster.services';

const createHoster = async (req: Request, res: Response) => {
  const result = await hosterServices.createHosterIntoDB(req.body);

  res.status(200).json({
    statusCode: 200,
    data: result,
  });
};

export const hosterControllers = {
  createHoster,
};
