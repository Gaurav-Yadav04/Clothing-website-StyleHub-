import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


//App Config..
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middlewares..
app.use(express.json());
app.use(cors());

// Api endPoints
app.use('/api/user',userRouter);
app.use('/api/product',productRoute);
app.use('/api/cart',cartRoute);
app.use('/api/order',orderRouter);


app.get('/',(req, res) => {
    res.send("Api Working..");
})

app.listen(port, () => {
    console.log("Server Started at PORT :" + port);
})
