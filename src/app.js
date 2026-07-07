import express from 'express';
import corsMiddleware from './config/cors.config.js'
import helmet from 'helmet';


const app=express();

app.use(corsMiddleware)
app.use(helmet());




export default app;