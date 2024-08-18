import { check, validationResult } from "express-validator";

class UserValidations {
    
    Validations = [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check('password', 'Password must be 4 or more characters').isLength({ min: 4 }),
    ]

    validate = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
}



export default UserValidations