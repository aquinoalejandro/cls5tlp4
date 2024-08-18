
import { check, validationResult } from 'express-validator';

class ProductValidations {

   Validations = [
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty().isNumeric(),
    check('category', 'Category is required').not().isEmpty(),
    check('stock', 'Stock is required').not().isEmpty().isNumeric(),
  ]

  validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
}

export default ProductValidations