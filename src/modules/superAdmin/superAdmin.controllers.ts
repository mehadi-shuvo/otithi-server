import { Request, Response } from 'express';
import { superAdminServices } from './superAdmin.services';

const createSuperAdmin = async (req: Request, res: Response) => {
  const result = await superAdminServices.createSuperAdminIntoDB(req.body);
  res.status(200).json({
    statusCode: 200,
    data: result,
  });
};

export const superAdminControllers = {
  createSuperAdmin,
};
