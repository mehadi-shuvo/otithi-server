import { Router } from 'express';
import { roomRoute } from '../../modules/room/room.routes';
import { superAdminRoutes } from '../../modules/superAdmin/superAdmin.routes';
import { hosterRoutes } from '../../modules/hoster/hoster.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/room',
    module: roomRoute,
  },
  {
    path: '/admin-secret',
    module: superAdminRoutes,
  },
  {
    path: '/hoster',
    module: hosterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.module));

export default router;
