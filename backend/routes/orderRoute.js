import express from "express";
import { 
  allOrders, 
  placeOrder, 
  placeOrderRazorpay, 
  placeOrderStripe, 
  updateStatus, 
  userOrder, 
  verifyRazorpay, 
  verifyStripe 
} from '../controllers/orderController.js';
import adminAuth from "../middleware/adminAuth.js";
import auth from "../middleware/auth.js"; // Updated to use the named import

const orderRouter = express.Router();

// Admin features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment features
orderRouter.post('/place-order', auth, placeOrder);  // Use 'auth' middleware
orderRouter.post('/stripe', auth, placeOrderStripe);
orderRouter.post('/razorpay', auth, placeOrderRazorpay);

// User Features
orderRouter.post('/user-orders', auth, userOrder);

// Verify payment
orderRouter.post('/verify-stripe', auth, verifyStripe);
orderRouter.post('/verify-razorpay', auth, verifyRazorpay);

export default orderRouter;
