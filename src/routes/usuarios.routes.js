import { Router } from 'express';
import UserController from '../controllers/usuarios.controllers.js';
import UserValidations from '../validations/user.validations.js';


const router = Router();
const userController = new UserController();
const userValidations = new UserValidations();



router.get('/users', userController.getUsers )

router.post('/users', userValidations.Validations, userValidations.validate, userController.registerUser )

router.put('/users', userController.updateUser )

export default router;