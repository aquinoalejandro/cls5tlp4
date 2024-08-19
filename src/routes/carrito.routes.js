import { Router } from 'express';
import CartController from '../controllers/carrito.controllers.js';

const router = Router();
const cartController = new CartController();

router.post('/carts', cartController.createCart )

router.put('/carts/:id', cartController.updateCart )

router.delete('/carts/:id', cartController.deleteCart )

export default router;