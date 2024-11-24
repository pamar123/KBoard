// server/src/routes/index.ts
import { Router } from 'express';
import apiRoutes from './api/index.js';
import authRoutes from './auth-routes.js';

const router = Router();

// Auth routes (public)
router.use('/auth', authRoutes);

// API routes (protected)
router.use('/api', apiRoutes);

export default router;