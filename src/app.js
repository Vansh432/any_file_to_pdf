import express from 'express';
import corsMiddleware from './config/cors.config.js'
import helmet from 'helmet';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { routeNotFound } from './middlewares/routeNotFound.middleware.js';


const app=express();

app.use(corsMiddleware)
app.use(helmet());

app.get('/',(req,res)=>{
    // store IP that where it opens ->
    return res.status(200).json({
        status:true,
        message:"Server is runing"
    })
})



app.use(routeNotFound)
app.use(errorHandler)

export default app;