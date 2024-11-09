import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {connectDB} from './dbconn/conn.js';
import surveyRouter from './routes/surveyRoutes.js';


const app =  express();
dotenv.config({ path: './config.env' });

connectDB();

//middlewares
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    // credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use('/survey',surveyRouter)

app.get('/', (req, res) => {
    res.send(`Hello world app`);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server up and running  at ${PORT}`);
});

