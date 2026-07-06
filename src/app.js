import express from 'express';
import corsMiddleware from './config/cors.config.js'
import helmet from 'helmet';


const app=express();

app.use(corsMiddleware)




export default app;