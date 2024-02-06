import express from 'express';
import { superAdminControllers } from './superAdmin.controllers';

const router = express.Router();

router.post('/', superAdminControllers.createSuperAdmin);

export const superAdminRoutes = router;
