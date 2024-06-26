const express = require('express');
const router = express.Router();
const { validate } = require('../middlewares/validator');
const authValidation = require('../validations/authValidation');
const registController = require('../controllers/auth/registController');
const loginController = require('../controllers/auth/loginController');
const logoutController = require('../controllers/auth/logoutController');
const forgetController = require('../controllers/auth/forgetController');
const { verifyToken } = require('../middlewares/validateToken');

router.post('/register', validate(authValidation.registUser), registController.register);
router.post('/login', validate(authValidation.loginUser), loginController.login);
router.post('/logout', logoutController.logout);
router.post('/forget', validate(authValidation.getOtp), forgetController.getOTP);
router.post('/verify-otp', validate(authValidation.verifyOTP), forgetController.verifyOTP);
router.put('/reset-password', forgetController.resetPassword);

module.exports = router; 

