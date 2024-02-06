import express from 'express';
import { hosterControllers } from './hoster.controllers';

const router = express.Router();

router.post('/', hosterControllers.createHoster);

export const hosterRoutes = router;
