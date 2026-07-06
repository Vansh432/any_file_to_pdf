import cors from 'cors';

const allowDomainOrigin=process.env.NODE_ENV==="development"?process.env.allowDomain:""
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