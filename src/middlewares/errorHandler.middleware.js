import { sendError } from "../shared/response/response.js";

export const errorHandler=(err,req,res,next)=>{

    const statusCode=err?.statusCode || 500
    const response={
        statusCode,
        message:err?.message || "Internal Server Error"
    }
    const isDevelopment=process.env.NODE_ENV==="development"
    if(isDevelopment){
        response["stack"]=err?.stack;
    }
    return sendError(res,response)
}