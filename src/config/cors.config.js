import cors from 'cors';
import { env } from './env.config.js';

const allowDomainOrigin=(env.allowedDomain || "").split(",") || []
const corsOptions={
        origin:(origin,callback)=>{
            if(!origin){
                return callback(null,true)
            }
            if(allowDomainOrigin.includes(origin)){
               return callback(null,true)
            }
            return callback(new Error("Not allowed by CORS "));
        },
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
        credentials:true,
        exposedHeaders:["Content-Disposition"],
        optionsSuccessStatus:204
}

export default cors(corsOptions)