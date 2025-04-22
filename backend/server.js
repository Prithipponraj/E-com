import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongoDb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 3000;
connectDb();
connectCloudinary();

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'https://hautehue.netlify.app',         // First allowed origin
      'https://hautehueadmin.netlify.app',    // Second allowed origin
    ];

    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);  // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS'));  // Block the origin
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow credentials (cookies, headers)
  optionsSuccessStatus: 200,  // For older browsers
};

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));  // Apply CORS middleware with custom options

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRoute);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
  res.send('Server is working');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
