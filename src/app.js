import express from 'express';
import corsMiddleware from './config/cors.config.js'
import helmet from 'helmet';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import { routeNotFound } from './middlewares/routeNotFound.middleware.js';
import { sendSuccess } from './shared/response/response.js';
import convertFile from './modules/anyFileToconvert/index.route.js'

const app=express();

app.use(corsMiddleware)
app.use(helmet());

 
app.use(express.json())

app.get('/',(req,res)=>{
    // store IP that where it opens ->
    return sendSuccess(res,{statusCode:200,message:"Server is runing"})
})

app.use('/api/v1/convert',convertFile)


app.use(routeNotFound)
app.use(errorHandler)

export default app;