import { Router } from 'express';
import CartController from '../controllers/carrito.controllers.js';

const router = Router();
const cartController = new CartController();

router.post('/carts', cartController.createcart )

router.put('/carts/:id', cartController.updatecart )

router.delete('/carts/:id', cartController.deleteProduct )

export default router;