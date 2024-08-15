import { Router } from 'express';
import { registerUser, getUsers, updateUser } from '../controllers/usuarios.controllers.js';

const router = Router();


router.get('/users', getUsers )
router.post('/user', registerUser )
router.put('/user', updateUser )

export default router;