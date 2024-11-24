// server/src/routes/api/index.ts
import { Router } from 'express';
import { ticketRouter } from './ticket-routes.js';
import { userRouter } from './user-routes.js';
import { authenticateToken } from '../../middleware/auth.js';
const router = Router();
// Protect all API routes
router.use(authenticateToken);
// Use route handlers
router.use('/tickets', ticketRouter);
router.use('/users', userRouter);
export default router;
