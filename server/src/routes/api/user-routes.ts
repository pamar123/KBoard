// server/src/routes/api/user-routes.ts
import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/user-controller.js';
import { authenticateToken } from '../../middleware/auth.js';

const router = express.Router();

// Protect all user routes except user creation
router.post('/', createUser); // Allow new user creation without authentication

// Protect all other user routes
router.use(authenticateToken);

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export { router as userRouter };