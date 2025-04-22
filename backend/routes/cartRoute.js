import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js';
import auth  from '../middleware/auth.js';  // Use named import here

const cartRouter = express.Router();

cartRouter.get('/get', auth, getUserCart);  // Use 'auth' middleware
cartRouter.post('/add', auth, addToCart);
cartRouter.post('/update', auth, updateCart);

export default cartRouter;
