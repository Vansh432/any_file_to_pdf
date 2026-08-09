import { asyncHandler } from "../../shared/utils/asyncHandler.js";

//convert File desire output
export const convertFile=asyncHandler((req,res,next)=>{
      console.log("files==>",req?.file)
})