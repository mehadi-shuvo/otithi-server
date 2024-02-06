import { TSuperAdmin } from './superAdmin.interface';
import SuperAdmin from './superAdmin.model';

const createSuperAdminIntoDB = async (payload: TSuperAdmin) => {
  const result = await SuperAdmin.create(payload);
  return result;
};

export const superAdminServices = {
  createSuperAdminIntoDB,
};
