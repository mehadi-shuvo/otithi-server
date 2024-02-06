import express from 'express';
// import test from 'node:test';
import { roomControllers } from './room.controllers';

const router = express.Router();

router.post('/', roomControllers.createRoom);
router.get('/', roomControllers.getAllRoom);
router.put('/');
router.delete('/');

export const roomRoute = router;
