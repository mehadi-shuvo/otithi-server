import { generateHostID } from '../../app/utils/generateHostID';
import { THoster } from './hoster.interface';
import { Hoster } from './hoster.model';

const createHosterIntoDB = async (payload: Partial<THoster>) => {
  const hostID = await generateHostID();
  const result = await Hoster.create({ ...payload, hostID });
  return result;
};

export const hosterServices = {
  createHosterIntoDB,
};
