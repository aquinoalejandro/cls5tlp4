import { Router } from 'express';
import ProductController from '../controllers/productos.controllers.js';
import ProductValidations from '../validations/product.validations.js';


const router = Router();
const productController = new ProductController();
const productValidations = new ProductValidations();


router.get('/products', productController.getProducts )

router.post('/products', productValidations.Validations, productValidations.validate, productController.createProduct);

router.put('/products/:id', productController.updateProduct )

router.delete('/products/:id', productController.deleteProduct )


export default router;