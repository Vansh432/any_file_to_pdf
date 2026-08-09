import { sendError } from "../shared/response/response.js"

export const routeNotFound=(req,res,next)=>{
    return sendError(res,{statusCode:404,message:"Route not found"})
}