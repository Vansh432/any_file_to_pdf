import { sendSuccess } from "../../shared/response/response.js";
import { asyncHandler } from "../../shared/utils/asyncHandler.js";

//convert File desire output
export const convertFile=asyncHandler((req,res,next)=>{
      const files=req?.files
      const convertType=req?.body?.convertToFile
      const convertFiles=[];
      switch(fileType){
            case pdf:
                  convertFiles=await converFileToPDF()
      }
      sendSuccess(res,{statusCode:200,message:"File convert is in processing"})
})