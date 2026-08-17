import { sendSuccess } from "../../shared/response/response.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";

//convert File desire output
export const convertFile=asyncHandler((req,res,next)=>{
      console.log("files==>",req?.files)
      sendSuccess(res,{statusCode:200,message:"File convert is in processing"})
})